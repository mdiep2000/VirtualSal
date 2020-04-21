package Forum;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ForumServlet")
public class ForumServlet extends HttpServlet 
{
    private static final long serialVersionUID = 1L;

    public ForumServlet() 
    {
        super();
    }
    
    //request contains data coming from browser
    //response sends data back to web page
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
			// Ensure connection with database is established			
			
            // Get parameters from the server
            // Initialize Question (server) and Answer(s) (clients)
			
            // Add question and answer(s) to database

            // Update answer up/downvote and retrieve updated answer order
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {
		doGet(request, response);
	}

}