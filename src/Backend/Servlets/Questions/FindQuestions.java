package Backend.Servlets.Review;

import Backend.Database.SQLQueryClass.*;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet("/FindQuestion")
public class FindQuestion extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public FindQuestion() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Ensure connection with database is established
        SQL_Util.initConnection();
        QuestionClass question = new QuestionClass();
        // Parameter from frontend
        String keyword = request.getParameter("keyword");

        if (keyword == null || keyword.isEmpty()) {
            question.setValid(false);
        } else {
            question = SQL_Util.getQuestion(keyword);
        }
        // Send to frontend
        String json = new Gson().toJson(question);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);

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
