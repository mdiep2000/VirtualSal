package Backend.Servlets.Questions;

public class AnswerClass 
{
    private int questionID;
	private int userID;
	private String answerBody;
	private int upvotes;
    private int downvotes;
    

	public int getQuestionID() {
		return questionID;
	}
	public void setQuestionID(int id) {
		this.questionID = id;
    }
    public int getUserID() {
		return userID;
	}
	public void setUserID(int id) {
		this.userID = id;
	}
	public String getAnswerBody() {
		return answerBody;
	}
	public void setAnswerBody(String body) {
		this.answerBody = body;
	}
	public int getUpvotes() {
		return upvotes;
	}
	public void setUpvotes(int votes) {
		this.upvotes = votes;
    }
    public int getDownvotes() {
		return downvotes;
	}
	public void setDownvotes(int votes) {
		this.downvotes = votes;
	}
	
	@Override
	public String toString() {
		return "Answer [questionID=" + questionID + ", userID=" + userID + ", answerBody=" + answerBody
				+ ", upvotes=" + upvotes + ", downvotes=" + downvotes + "]";
	}

}