package Forum;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

public class Answer extends Thread
{
	private String content;
	
    // Stores number of upvotes
    private int upvotes;
    // Stores number of downvotes
    private int downvotes;
    // Stores the difference (upvotes - downvotes)
    public int diff;
    // Stores the forum it's an answer to
    private Forum forum;
    
    private BufferedReader br;
	private PrintWriter pw;

    // Constructor
    public Answer(Forum forum, String content, Socket s) throws IOException
    {
        this.forum = forum;
        this.content = content;
        upvotes = 0;
        downvotes = 0;
        diff = 0;
        pw = new PrintWriter(s.getOutputStream());
		br = new BufferedReader(new InputStreamReader(s.getInputStream()));
		this.start();
    }

    public void run()
    {
    	try {
			while(true) {
				String line = br.readLine(); // blocking line (wait until a client sends us a message)
				//cr.broadcast(line, this); 
				System.out.println(line);
				if(line.equals("y")) {
					upvote();
				}
				else if(line.equals("n")) {
					downvote();
				}
				Forum.sort();
				System.out.println(diff);
			}
			
		} catch (IOException ioe) {
			// this exception occurs when a client disconnects
			System.out.println("ioe in ServerThread.run: " + ioe.getMessage());
		}
    }

    public void upvote()
    {
        // Increase number of upvotes
        upvotes++;
        // Increase the difference
        diff++;
    }
    
    public void downvote()
    {
        // Increase number of downvotes
        downvotes++;
        // Decrease the difference
        diff--;
    }
} 