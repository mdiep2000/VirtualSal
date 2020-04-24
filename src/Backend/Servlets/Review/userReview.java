package Backend.Servlets.Review;
import Backend.Database.SQLQueryClass.*;

public class userReview {
	private String studentName;
	private String comment;
	private String courseName;
	private int workload;
	private int clarity;
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public int getWorkload() {
		return workload;
	}
	public void setWorkload(int workload) {
		this.workload = workload;
	}
	public int getClarity() {
		return clarity;
	}
	public void setClarity(int clarity) {
		this.clarity = clarity;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	@Override
	public String toString() {
		return "userReview [studentName=" + studentName + ", comment=" + comment + ", courseName=" + courseName
				+ ", workload=" + workload + ", clarity=" + clarity + "]";
	}
}
