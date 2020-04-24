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

@WebServlet("/AddQuestions")
public class AddQuestions extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public AddQuestions() {
        super();
    }

    // Parameters from frontend: "keyword" / "courseName"
    /* FRONT END NOTES: .... */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        SQL_Util.initConnection();

        Map<String, String> data = new HashMap<>();

        // Receive data from server - not sure if this is how we are searching
        String courseName = request.getParameter("courseName");
        String questionTitle = request.getParameter("questionTitle");
        String questionBody = request.getParameter("questionBody");

        SQL_Util.addQuestion(courseName, questionTitle, questionBody);
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
