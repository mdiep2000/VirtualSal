package Servlets.Search;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Vector;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import Database.SQLQueryClass.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import Database.SQLQueryClass.SQL_Util;
import Servlets.Questions.QuestionClass;
import Servlets.Review.Review;


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
			String searchBarInput = request.getParameter("searchKey");
			
			System.out.println(searchBarInput);
			
			ExecutorService executor = Executors.newCachedThreadPool();
            // Multiple threads to return search from forums, reviews, courses
            SearchThread forumsThread = new SearchThread(searchBarInput, "forums", jsonStrings);
            executor.execute(forumsThread);
            SearchThread reviewsThread = new SearchThread(searchBarInput, "reviews", jsonStrings);
            executor.execute(reviewsThread);
            SearchThread coursesThread = new SearchThread(searchBarInput, "courses", jsonStrings);
            executor.execute(coursesThread);
            
            executor.shutdown();
    		while(!executor.isTerminated()) 
    		{
    			Thread.yield();
    		}
            
            System.out.println("Strings: " + jsonStrings);
            			
            String clientOrigin = request.getHeader("origin");
            response.addHeader("Allow-Access-Control-Origin", clientOrigin);
            
			//Send to frontend 
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
            System.out.println("FSQL");
            String question = new Gson().toJson(q);
            if(q.isValid() == true)
            {
            	jsonStrings.add(question);
            }
        }
        // Find Review
        else if(searchType.equals("reviews"))
        {
            Review pr = SQL_Util.getReview(searchBarInput);
            System.out.println("RSQL");
            String professorReview = new Gson().toJson(pr);
            if(!pr.reviewList.isEmpty())
            {
            	jsonStrings.add(professorReview);
            }
        }
        // Find Course
        else if(searchType.equals("courses"))
        {
            Map<String, String> data = new HashMap<>();
            data = SQL_Util.getCourseDetails(searchBarInput);
            System.out.println("SSQL");
            String json = new Gson().toJson(data);
            if(!data.isEmpty())
            {
            	jsonStrings.add(json);
            }
        }
    }
}