package Backend.Servlets.Questions;
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

@WebServlet("/AddAnswer")
public class AddAnswer extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public AddAnswer() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        SQL_Util.initConnection();

        Map<String, String> data = new HashMap<>();

        // Receive data from server - not sure if this is how we are searching
        String questionID = request.getParameter("questionID");
        String answerBody = request.getParameter("answerBody");
        String upvotes = request.getParameter("upvotes");
        String downvotes = request.getParameter("downvotes");

        SQL_Util.addAnswer(Integer.parseInt(questionID), answerBody, Integer.parseInt(upvotes), Integer.parseInt(downvotes));
    
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

}
