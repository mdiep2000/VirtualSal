package Backend.Servlets.Schedule;
import Backend.Database.SQLQueryClass.*;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Parameters from server: semester,year,courseName,professor,sectionNumber
 * Send a string valid/invalid to the server
 */
@WebServlet("/AddCourse")
public class AddCourse extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public AddCourse() {
        super();
    }
    
    //request contains data coming from browser
    //response sends data back to web page
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
			//Ensure connection with database is established
			SQL_Util.initConnection();
			
			String check = "invalid";
			
			//Receive data from frontend
			String semester = request.getParameter("semester");
			String year = request.getParameter("year");
			String courseName = request.getParameter("courseName");
			String professorName = request.getParameter("professor");
			String sectionNumber = request.getParameter("sectionNumber");
			
			if (semester!= null && !semester.isEmpty() && 
			    year!=null && !year.isEmpty() &&
			    courseName!=null && !courseName.isEmpty() &&
			    professorName!=null && !professorName.isEmpty() &&
			    sectionNumber!=null && !sectionNumber.isEmpty()) { 
			
				//Ensure section number and year are integers
				 try 
			        { 
			            // checking valid integer using parseInt() method 
			            Integer.parseInt(year); 
			            Integer.parseInt(sectionNumber);
			            check = "valid";
			        }  
			        catch (NumberFormatException e)  
			        { 
			            System.out.println("not a valid integer number"); 
			        } 
			    
				 //all checks passed add to database
				 if(check.equalsIgnoreCase("valid")) {
					 SQL_Util.addCourse(semester, courseName,professorName, Integer.parseInt(sectionNumber), Integer.parseInt(year));
				 }
			}
						
			//Notify frontend
			response.setContentType("text/plain");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(check);
			
			
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
