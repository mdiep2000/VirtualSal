package Backend.Servlets.Search;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Vector;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import Backend.Database.SQLQueryClass.SQL_Util;
import Backend.Servlets.Questions.QuestionClass;
import Backend.Servlets.Review.Review;


@WebServlet("/SearchResultsServlet")
public class SearchResultsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    Vector<String> jsonStrings = new Vector<String>();

    public SearchResultsServlet() {
        super();
    }
    
    //request contains data coming from browser
    //response sends data back to web page
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			
			//Ensure connection with database is established
			SQL_Util.initConnection();
			
			//Parameter from frontend
			String searchBarInput = request.getParameter("searchBarInput");
			
            // Multiple threads to return search from forums, reviews, courses
            SearchThread forumsThread = new SearchThread(searchBarInput, "forums", jsonStrings);
            SearchThread reviewsThread = new SearchThread(searchBarInput, "reviews", jsonStrings);
            SearchThread coursesThread = new SearchThread(searchBarInput, "courses", jsonStrings);
			
			//Send to frontend [CONTAINS SYNTAX ERRORS]
            String json = new Gson().toJson(jsonStrings);
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

class SearchThread extends Thread
{
    String searchBarInput;
    String searchType;
    Vector<String> jsonStrings;

    public SearchThread(String searchBarInput, String searchType, Vector<String> jsonStrings)
    {
        this.searchBarInput = searchBarInput;
        this.searchType = searchType;
        this.jsonStrings = jsonStrings;
    }
    public void run()
    {
        // Look into database related to searchType (forum, review, course)
        // Find Forum
        if(searchType.equals("forums"))
        {
            QuestionClass q = SQL_Util.getQuestionAnswers(searchBarInput);
            String question = new Gson().toJson(q);
            jsonStrings.add(question);
        }
        // Find Review
        else if(searchType.equals("reviews"))
        {
            Review pr = SQL_Util.getReview(searchBarInput);
            String professorReview = new Gson().toJson(pr);
            jsonStrings.add(professorReview);
        }
        // Find Course
        else if(searchType.equals("courses"))
        {
            Map<String, String> data = new HashMap<>();
            data = SQL_Util.getCourseDetails(searchBarInput);
            String json = new Gson().toJson(data);
            jsonStrings.add(json);
        }
    }
}