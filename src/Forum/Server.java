package Forum;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Vector;

public class Server 
{
	// Data structure to hold forum threads
	private Vector<ServerThread> serverThreads;
	
	public Server(int port) 
	{
		try 
		{
			ServerSocket ss = new ServerSocket(port);
			serverThreads = new Vector<ServerThread>();
			while(true) 
			{
				// Blocking; handle requests from web browser
				Socket s = ss.accept();
				// Create new ServerThread to execute requested task
				ServerThread st = new ServerThread(s);
				serverThreads.add(st);
			}
		} 
		catch (IOException ioe) 
		{
			System.out.println("ioe in ForumServer constructor: " + ioe.getMessage());
		}
	}
	
	public static void main(String [] args)
	{
		Server s = new Server(6789);
	}
	
}
