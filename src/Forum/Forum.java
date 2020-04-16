package Forum;

import java.util.Vector;

public class Forum 
{
    String question;
    Vector<Answer> answers;

    public Forum(String question)
    {
        // Question
        this.question = question;
        // Vector of answers
        answers = new Vector<Answer>();
    }

    // Re-sort the answers based on number of upvotes and downvotes
    public void sort()
    {
        // Use comparator to sort Vector of Answers by diff (highest to lowest)
    }

}