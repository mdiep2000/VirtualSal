package Forum;

import java.net.Socket;

public class ServerThread extends Thread
{
	public ServerThread(Socket s)
	{
		
	}
	
	public void run()
	{
		// Implement interpretation of different client requests 
		// (a.k.a retrieving forum content vs. updating it)
		
		/*
		// Get 5 forum posts for the user dashboard
		if(retrieve)
		{
			Access the question and answers from the database
			Return the information to be output to the client
		}
		// Update the post
		else if(updating forum)
		{
			Access information from database
			Update information in database
			{
				Up-vote ++;
				Down-vote --;
			}
		}
		// Asking new question or answer
		else if(posting)
		{
			Get information that user inputted
			Add to the database
		}
        */
        
        // Shut down the thread after done
	}
}
