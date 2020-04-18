import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class SQL_Util {
	
	//SET YOUR WORKBENCH LOGIN
	static String pass = "root";
	static String userName = "root";
	public static final String CREDENTIALS_STRING = "jdbc:mysql://localhost:3306/FinalProject?user="+userName+"&password="+pass+"&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
	static Connection connection;
	
	//must be set when user logins or signup
	static int currentUserId = -1;
	
	//Establish Connection to database
	public static void initConnection() {
		
		//we already made a connection
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
	
	public static void addCourse(String semester, String courseName,String professorName, int sectionNumber, int year) {
		try {
			PreparedStatement preparedStatement = connection.prepareStatement("INSERT "
					+ "	INTO Schedule(userID,semester,courseName,professorName,sectionNumber,year) "
					+ "VALUES(?,?,?,?,?,?)");
			
			preparedStatement.setInt(1,currentUserId);
			preparedStatement.setString(2, semester);
			preparedStatement.setString(3, courseName);
			preparedStatement.setString(4, professorName);
			preparedStatement.setInt(5, sectionNumber);
			preparedStatement.setInt(6, year);


			preparedStatement.execute();
			preparedStatement.close();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	

	
	
}
