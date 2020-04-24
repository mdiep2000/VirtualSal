import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

package Search;

@WebServlet("/SearchResultsServlet")
public class SearchResultsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

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
            SearchThread(searchBarInput, "forums");
            SearchThread(searchBarInput, "reviews");
            SearchThread(searchBarInput, "courses");
			
			//Send to frontend
			String json = new Gson().toJson();
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

    public SearchThread(String searchBarInput, String searchType)
    {
        this.searchBarInput = searchBarInput;
        this.searchType = searchType;
    }
    public void run()
    {
        // Look into database related to searchType (forum, review, course)

        // Find Forum

        // Find Review

        // Find Course
        
        // Return all associated values
    }
}