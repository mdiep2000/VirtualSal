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

@WebServlet("/DownVoteAnswer")
public class DownVoteAnswer extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public DownVoteAnswer() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        SQL_Util.initConnection();

        // Receive data from server
        String answerID = request.getParameter("answerID");
        // No Error Checking currently - assume we get a valid answerID
        SQL_Util.downvoteAnswer(Integer.parseInt(answerID));
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
