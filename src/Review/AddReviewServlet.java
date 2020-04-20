import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class SchoolFormServlet
 */
@WebServlet("/AddReviewServlet")
public class AddReviewServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public AddReviewServlet() {
        super();
    }
    
    //request contains data coming from browser
    //response sends data back to web page
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
			//Ensure connection with database is established
			SQL_Util.initConnection();
			
			
			//Parameters from the server
			String courseName = request.getParameter("courseName");
			String workLoad = request.getParameter("workload");
			String clarity = request.getParameter("clarity");
			String professorName = request.getParameter("professor");
			String comment = request.getParameter("comment");
			
			//addReview to Database
			SQL_Util.addReview(courseName, professorName, Integer.parseInt(workLoad), Integer.parseInt(clarity), comment);
						
		
			
			
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
