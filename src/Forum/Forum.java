package Forum;

import java.util.Collections;
import java.util.Comparator;
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
        // Use Comparator to sort Vector of answers by diff (highest to lowest)
        Collections.sort(answers, new Comparator<Answer>()
        {
            public int compare(Answer a, Answer b)
            {
                if (a.diff > b.diff) return -1;
				if (a.diff < b.diff) return 1;
				return 0;
            }
        });
    }

}