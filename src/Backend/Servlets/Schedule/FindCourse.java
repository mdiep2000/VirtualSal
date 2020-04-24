package Backend.Servlets.Schedule;
import Backend.Database.SQLQueryClass.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


@WebServlet("/FindCourse")
public class FindCourse extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public FindCourse() {
        super();
    }
    
    /**Parameters from frontend: "courseName"
    Sends back a json with parameters valid,courseName, sectionNumber, professorName and semester to frontend.
    valid is true if the courseName field is not empty and the courseName exists in database
    NOTE: 
    ---IN THE FRONTEND CHECK IF VALID EQUALS TO STRING "true". In that case only the rest of the parameters are sent
    to the frontend. 
    ---All parameters are sent as String. So typecasting needs to be done at frontend.
    **/
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		
		//Ensure connection with database is established
			SQL_Util.initConnection();
			
			Map<String, String> data = new HashMap<>();
			
			//Receive data from server
			String courseName = request.getParameter("courseName");
			
			
			//Ensure user entered a course in courseName and course actually exists
			if(courseName==null || courseName.isEmpty()) {
				data.put("valid", "false");
			}
			else if(SQL_Util.courseExists(courseName)==false) {
				data.put("valid", "false");
				
			}
			else //course must be in database
			{
				data = SQL_Util.getCourseDetails(courseName);
			}
				
						
			//Send to frontend
			String json = new Gson().toJson(data);
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
