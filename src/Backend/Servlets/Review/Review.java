package Backend.Servlets.Review;
import Backend.Database.SQLQueryClass.*;

import java.util.Vector;

public class Review {
	private String professorName;
	private double score;
	private boolean valid;
	public Vector<userReview> reviewList = new Vector<userReview>();
	
	public String getProfessorName() {
		return professorName;
	}
	public void setProfessorName(String professorName) {
		this.professorName = professorName;
	}
	public double getScore() {
		return score;
	}
	public void setScore(double score) {
		this.score = score;
	}
	public boolean isValid() {
		return valid;
	}
	public void setValid(boolean valid) {
		this.valid = valid;
	}
	@Override
	public String toString() {
		return "Review [professorName=" + professorName + ", score=" + score + ", valid=" + valid + ", reviewList="
				+ reviewList + "]";
	}
	
}

