package Backend.Servlets.Schedule;
import Backend.Database.SQLQueryClass.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


//Returns the users current schedule
@WebServlet("/MyScheduleServlet")
public class MyScheduleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public MyScheduleServlet() {
        super();
    }
    
    /**
    Sends back a json with parameters courseName, sectionNumber, professorName and semester to frontend.
    valid is true if the user has a course in schedule
    NOTE: 
    ---IN THE FRONTEND CHECK IF VALID EQUALS TO STRING "true".
    **/
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
		
			//Ensure connection with database is established
			SQL_Util.initConnection();
			
			
			Stack<Map<String,String>> details = SQL_Util.getUsersCourses();
			MySchedule userSchedule = new MySchedule();
			userSchedule.details = details;
			
			if (details.size()==0) {
				userSchedule.valid="false";
			}
			
						
			//Send to frontend
			String json = new Gson().toJson(userSchedule);
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

class MySchedule {
	
	public Stack<Map<String,String>> details;
	public String valid ="true";
}
