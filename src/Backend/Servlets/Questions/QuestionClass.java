package Backend.Servlets.Questions;

import java.util.ArrayList;

public class QuestionClass {
	private boolean valid;
	private String courseName;
	private int posterID;
	private int questionID;
	private String questionTitle;
	private String questionBody;
	public ArrayList<AnswerClass> answerThread = new ArrayList<AnswerClass>();

	public boolean isValid() {
		return valid;
	}

	public void setValid(boolean valid) {
		this.valid = valid;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public int getPosterID() {
		return posterID;
	}

	public void setPosterID(int id) {
		this.posterID = id;
	}

	public int getQuestionID() {
		return questionID;
	}

	public void setQuestionID(int id) {
		this.questionID = id;
	}

	public String getQuestionTitle() {
		return questionTitle;
	}

	public void setQuestionTitle(String title) {
		this.questionTitle = title;
	}

	public String getQuestionBody() {
		return questionBody;
	}

	public void setQuestionBody(String body) {
		this.questionBody = body;
	}

	@Override
	public String toString() {
		return "Question [vaid=" + valid + ", courseName=" + courseName + ", posterID=" + posterID + ", questionID="
				+ questionID + ", questionTitle=" + questionTitle + ", questionBody=" + questionBody + ", answerThread="
				+ answerThread + "]";
	}
}