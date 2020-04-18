package Forum;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Forum 
{
    String question;
    private static List<Answer> answerList;

    public Forum(String question) throws IOException
    {
        // Question
    	
        this.question = question;
        // Vector of answers
        ServerSocket ss = new ServerSocket(3456);
        System.out.println("Bound to port 3456");
        answerList = Collections.synchronizedList(new ArrayList<Answer>());
        while(true) {
        	System.out.println("Waiting for new answer...");
        	Socket s = ss.accept();
        	/*System.out.println("Creating a new answer");
        	Scanner s1 = new Scanner(System.in);*/
        	String content = "answer 1";
        	Answer a = new Answer(this, content, s);
        	answerList.add(a);
        }
    }

    // Re-sort the answers based on number of upvotes and downvotes
    public static void sort()
    {
        // Use Comparator to sort Vector of answers by diff (highest to lowest)
        Collections.sort(answerList, new Comparator<Answer>()
        {
            public int compare(Answer a, Answer b)
            {
                if (a.diff > b.diff) return -1;
				if (a.diff < b.diff) return 1;
				return 0;
            }
        });
    }
    
    public static void main(String [] args) throws IOException {
		new Forum("Question 1");
		
	}

}