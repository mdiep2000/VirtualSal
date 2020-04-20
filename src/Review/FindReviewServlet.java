import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


/**
 * Parameter from frontend: professorName
 * Parameter sent: Review Object
 * Before acessing other variables in the reviewObject make sure that 
 * review object valid==true 
 * if valid is false the rest of the variables will be null 
 */
@WebServlet("/FindReviewServlet")
public class FindReviewServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public FindReviewServlet() {
        super();
    }
    
    //request contains data coming from browser
    //response sends data back to web page
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
			//Ensure connection with database is established
			SQL_Util.initConnection();
			Review professorReview = new Review();
			
			//Parameter from frontend
			String professorName = request.getParameter("professorName");
			
			//Ensure valid professorName
			if(professorName==null || professorName.isEmpty()) {
				professorReview.setValid(false);
			}//Ensure there are reviews of the given professor
			else if(SQL_Util.reviewExists(professorName)==false) {
				professorReview.setValid(false);
			}
			else {
				//retrieve professor Reviews from database
				professorReview = SQL_Util.getReview(professorName);
			}
			
			
			//Send to frontend
			String json = new Gson().toJson(professorReview);
		    response.setContentType("application/json");
		    response.setCharacterEncoding("UTF-8");
		    response.getWriter().write(json);
			
			
			
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
