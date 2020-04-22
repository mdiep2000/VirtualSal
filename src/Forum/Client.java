package Forum;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class Client extends Thread {
	private BufferedReader br;
	private PrintWriter pw;
	private Socket s;
	private String name = "User 1";

	public Client(String hostname, int port) {
		try {
			System.out.println("Try to connect to port 3456");
			Socket s = new Socket(hostname, port);
			System.out.println("Connected to port 3456");
			this.s = s;
			this.br = new BufferedReader(new InputStreamReader(s.getInputStream()));
			this.pw = new PrintWriter(s.getOutputStream());
			// this.name = name;
			this.start();

			// Scanner scan = new Scanner(System.in);
			// waiting for the user to upvote or downvote
			while (true) {
				System.out.println("Please upvote or downvote");
				String line = scan.nextLine();
				pw.println(line);
				pw.flush();
			}
		} catch (IOException ioe) {
			System.out.println("ioe in Client constructor: " + ioe.getMessage());
		}
	}

	public void run() {
		try {
			while (true) {
				String line = br.readLine(); // blocking line
				System.out.println(line);
			}
		} catch (IOException ioe) {
			System.out.println("ioe in ChatClient.run()" + ioe.getMessage());
		}
	}

	public static void main(String[] args) {
		new Client("127.0.0.1", 3456);
	}
}
