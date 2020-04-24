import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

public class SQL_Util {

	// SET YOUR WORKBENCH LOGIN
	static String pass = "root";
	static String userName = "root";
	public static final String CREDENTIALS_STRING = "jdbc:mysql://localhost:3306/FinalProject?user=" + userName
			+ "&password=" + pass
			+ "&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
	static Connection connection;

	// must be set when user logins or signup
	static int currentUserId = -1;

	// Establish Connection to database
	public static void initConnection() {

		// we already made a connection
		if (connection != null) {
			System.out.println("[WARN] Connection has already been established");
			return;
		}

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			connection = DriverManager.getConnection(CREDENTIALS_STRING);
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}

	// Add new user - upon sign up
	public static void addUser(String fName, String lName, String username, String email, String pw) {
		try {
			PreparedStatement preparedStatement = connection.prepareStatement(
					"INSERT INTO " + "UserRegistry(userID,fName,lName,username,email,pw) " + "VALUES(?,?,?,?,?,?)");
			preparedStatement.setInt(1, currentUserId);
			preparedStatement.setString(2, fName);
			preparedStatement.setString(3, lName);
			preparedStatement.setString(4, username);
			preparedStatement.setString(5, email);
			preparedStatement.setString(6, pw);

			preparedStatement.execute();
			// Not sure how to exactly return a JSON in a different way - this requires a
			// jar file to work?
			// JSONObject jsobject = new JSONObject();
			// jsobject.put("valid", true);
			preparedStatement.close();

		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
	}

	// Add course to Schedule Table
	// Referenced in AddCourse.java
	public static void addCourse(String semester, String courseName, String professorName, int sectionNumber,
			int term) {
		try {
			PreparedStatement preparedStatement = connection.prepareStatement(
					"INSERT INTO " + "Schedule(userID,semester,term, courseName ,professorName,sectionNumber) "
							+ "VALUES(?,?,?,?,?,?)");
			preparedStatement.setInt(1, currentUserId);
			preparedStatement.setString(2, semester);
			preparedStatement.setInt(3, term);
			preparedStatement.setString(4, courseName);
			preparedStatement.setString(5, professorName);
			preparedStatement.setInt(6, sectionNumber);

			preparedStatement.execute();
			preparedStatement.close();

		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
	}

	// Add course if it doesnt exist already - expected CS course list
	// NO NEED FOR THIS FUNCTION-WE CAN JUST HARDCODE THE COURSE DETAILS
	public static void addToCourseRegistry(String courseName, String courseDescription) {
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("INSERT INTO " + "CourseRegistry(courseName, courseDescritp) " + "VALUES(?,?)");
			preparedStatement.setString(1, courseName);
			preparedStatement.setString(2, courseDescription);

			preparedStatement.execute();
			preparedStatement.close();

		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
	}

	// Add new question/forum
	public static void addQuestion(String courseName, String questionTitle, String questionBody) {
		try {
			PreparedStatement preparedStatement = connection.prepareStatement(
					"INSERT INTO " + "Question(creationDate, courseName, posterID, questionTitle, questionBody) "
							+ "VALUES(CURRENT_TIMESTAMP,?,?,?,?)");
			preparedStatement.setString(1, courseName);
			preparedStatement.setInt(2, currentUserId);
			preparedStatement.setString(3, questionTitle);
			preparedStatement.setString(4, questionBody);

			preparedStatement.execute();
			preparedStatement.close();

		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
	}

	public static QuestionClass getQuestionAnswers(String keyword) {
		QuestionClass question = new QuestionClass();
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("SELECT * FROM " + "Question WHERE CONTAINS (questionBody, ?)");

			preparedStatement.setString(1, keyword);

			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				String courseName = rs.getString("courseName");
				int posterID = rs.getInt("posterID");
				int questionID = rs.getInt("questionID");
				String questionTitle = rs.getString("questionTitle");
				String questionBody = rs.getString("questionBody");

				question.setCourseName(courseName);
				question.setPosterID(posterID);
				question.setQuestionID(questionID);
				question.setQuestionTitle(questionTitle);
				question.setQuestionBody(questionBody);
				//This is where I would need to get the answers associated with the question ID 
				question.answerThread = getAnswer(questionID, posterID);
				preparedStatement.close();

			}
		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
		return question;
	}

	public static ArrayList<AnswerClass> getAnswer(int questionID, int posterID) {
		ArrayList<AnswerClass> answerThread = new ArrayList<AnswerClass>();
		AnswerClass answer = new Answer();
		answer.setQuestionID(questionID);
		answer.setUserID(posterID);
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("SELECT * FROM Answer WHERE questionID=?");

			preparedStatement.setInt(1, questionID);
			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				String answerBody = rs.getString("answerBody");
				int upvotes = rs.getInt("upvotes"));
				int downvotes = rs.getInt("downvotes");	
				answer.setBody(answerBody);
				answer.setUpvotes(upvotes);
				answer.setDownvotes(downvotes);
				answerThread.add(answer);
			}
			preparedStatement.close();

		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
		return answerThread;
	}

	// Add an answer to a question - must provide questionID associated with it.
	public static void addAnswer(int questionID, String answerBody, int upvotes, int downvotes) {
		try {
			PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO "
					+ "Answer(questionID, userID, answerBody, upvotes, downvotes) " + "VALUES(?,?,?,?,?)");

			preparedStatement.setInt(1, questionID);
			preparedStatement.setInt(2, currentUserId);
			preparedStatement.setString(3, answerBody);
			preparedStatement.setInt(4, upvotes);
			preparedStatement.setInt(5, downvotes);

			preparedStatement.execute();
			preparedStatement.close();

		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
	}

	public void upvoteQuestion(int answerID) {
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("UPDATE Answer SET upvotes='upvotes'+1 WHERE answerID=?");
			preparedStatement.setInt(1, answerID);

			preparedStatement.executeUpdate();
			preparedStatement.close();
		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}

	}

	public void downvoteAnswer(int answerID) {
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("UPDATE Answer SET downvotes='downvotes'+1 WHERE answerID=?");
			preparedStatement.setInt(1, answerID);

			preparedStatement.executeUpdate();
			preparedStatement.close();
		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}

	}

	// Add a new review
	// Referenced in AddReviewServlet.java
	public static void addReview(String courseName, String professor, int workloadVal, int clarity, String comment) {
		try {
			PreparedStatement preparedStatement = connection.prepareStatement(
					"INSERT INTO " + "Answer(posterID, courseName, professor, workloadVal, clarity, comment) "
							+ "VALUES(?,?,?,?,?,?)");

			preparedStatement.setInt(1, currentUserId);
			preparedStatement.setString(2, courseName);
			preparedStatement.setString(3, professor);
			preparedStatement.setInt(4, workloadVal);
			preparedStatement.setInt(5, clarity);
			preparedStatement.setString(6, comment);

			preparedStatement.execute();
			preparedStatement.close();

		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
	}

	public static Map<String, String> signInValidation(String username, String pw) {
		Map<String, String> userDetails = new HashMap<>();
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("SELECT * FROM " + "UserRegistry WHERE username=? and pw=?");

			preparedStatement.setString(1, username);
			preparedStatement.setString(2, pw);

			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				if (username.contentEquals(rs.getString("username"))) {
					if (pw.contentEquals(rs.getString("pw"))) {
						// Login Successful - return JSON of user info & store currentUserId
						// Sets the currentUserID - used in other functions
						// Must call signInValidation before any other function!
						currentUserId = rs.getInt("userID");
						userDetails.put("validSignIn", "true");
						userDetails.put("validUsername", "true");
						userDetails.put("name", rs.getString("fname"));
						userDetails.put("lastname", rs.getString("lname"));
						userDetails.put("email", rs.getString("email"));
						// list of courseNames - calls function
						userDetails.put("courses", getUserCourses(currentUserId));
					} else {
						// Incorrect password - return JSON of username only
						userDetails.put("validSignIn", "false");
						userDetails.put("validUsername", "true");
						userDetails.put("username", username);
					}
				} else {
					// Incorrect login - return JSON of only boolean
					userDetails.put("validSignIn", "false");
					userDetails.put("validUsername", "false");

				}
				preparedStatement.close();

			}
		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
		return userDetails;

	}

	// Gets a string of courseNames associated to the currentUserId
	public static String getUserCourses(int currentUserId) {
		String userCourses = "";
		try {
			PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM Schedule WHERE userID=?");

			preparedStatement.setInt(1, currentUserId);
			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				userCourses += (rs.getString("courseName") + " ");
			}
			preparedStatement.close();
			return userCourses;

		} catch (SQLException sqle) {
			System.out.println("Sqle: " + sqle.getMessage());
		}
		return userCourses;
	}

	// Checks if the courseName exists in the database
	// Referenced in FindCourse.java
	public static boolean courseExists(String courseName) {
		int courseCount = 0;
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("SELECT COUNT(*) AS count FROM CourseRegistry WHERE courseName=?");
			preparedStatement.setString(1, courseName);

			// since we are geting information back we need to use result set to capture
			// data
			ResultSet resultSet = preparedStatement.executeQuery();

			if (resultSet.next()) {
				courseCount = resultSet.getInt("count");
				preparedStatement.close();
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		if (courseCount > 0)
			return true;
		return false;
	}

	// Returns course details
	// Referenced in FindCourse.java
	public static Map<String, String> getCourseDetails(String courseName) {
		Map<String, String> courseDetails = new HashMap<>();
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("SELECT * FROM CourseRegistry WHERE courseName=?");
			preparedStatement.setString(1, courseName);

			// since we are geting information back we need to use result set to capture
			// data
			ResultSet resultSet = preparedStatement.executeQuery();

			if (resultSet.next()) {
				String cName = resultSet.getString("courseName");
				String semester = resultSet.getString("semester");
				int sectionNumber = resultSet.getInt("sectionNumber");
				String professorName = resultSet.getString("professorName");

				courseDetails.put("valid", "true");
				courseDetails.put("semester", semester);
				courseDetails.put("sectionNumber", String.valueOf(sectionNumber));
				courseDetails.put("professorName", professorName);
				courseDetails.put("courseName", cName);
				preparedStatement.close();
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return courseDetails;

	}

	// Check if there exists at least one review of the given professor
	// Referenced in FindReviewServlet.java
	public static boolean reviewExists(String professorName) {
		int reviewCount = 0;
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("SELECT COUNT(*) AS count FROM Review WHERE professor=?");
			preparedStatement.setString(1, professorName);

			// since we are geting information back we need to use result set to capture
			// data
			ResultSet resultSet = preparedStatement.executeQuery();

			if (resultSet.next()) {
				reviewCount = resultSet.getInt("count");
				preparedStatement.close();
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		if (reviewCount > 0)
			return true;
		return false;
	}

	// Referenced in FindReviewServlet.java
	public static Review getReview(String professorName) {
		Review professorReview = new Review();
		professorReview.setProfessorName(professorName);
		professorReview.setValid(true);
		double avgWorkload = 0;
		double avgClarity = 0;
		try {
			PreparedStatement preparedStatement = connection
					.prepareStatement("SELECT AVG(workloadVal) As avgWorkload FROM Review");
			ResultSet resultSet = preparedStatement.executeQuery();

			// Get average of workload
			if (resultSet.next()) {
				avgWorkload = resultSet.getDouble("avgWorkload");
			}

			// Get average of clarity rating
			preparedStatement = connection.prepareStatement("SELECT AVG(clarity) As avgClarity FROM Review");
			resultSet = preparedStatement.executeQuery();
			if (resultSet.next()) {
				avgClarity = resultSet.getDouble("avgClarity");
			}

			// Professor score average of workload and clarity
			professorReview.setScore((avgClarity + avgWorkload) / 2);

			preparedStatement = connection.prepareStatement(
					"SELECT * FROM Review r, UserRegistry u WHERE professor=? AND r.posterID = u.userID");
			preparedStatement.setString(1, professorName);

			// since we are geting information back we need to use result set to capture
			// data
			resultSet = preparedStatement.executeQuery();

			while (resultSet.next()) {
				String comment = resultSet.getString("comment");
				int workload = resultSet.getInt("workloadVal");
				int clarity = resultSet.getInt("clarity");
				String studentName = resultSet.getString("fName");
				String courseName = resultSet.getString("courseName");

				userReview currentReview = new userReview();
				currentReview.setStudentName(studentName);
				currentReview.setWorkload(workload);
				currentReview.setClarity(clarity);
				currentReview.setCourseName(courseName);
				currentReview.setComment(comment);
				professorReview.reviewList.add(currentReview);

				// System.out.println(comment+ " "+workload+" "+clarity+" "+studentName+"
				// "+courseName);

			}

			preparedStatement.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return professorReview;

	}

}
