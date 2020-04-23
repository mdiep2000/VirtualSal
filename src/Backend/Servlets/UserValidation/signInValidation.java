import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet("/signInValidation")
public class signInValidation extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public signInValidation() {
        super();
    }

    // Parameters from frontend: "username" & "password"
    /* FRONT END NOTES: .... */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        SQL_Util.initConnection();

        Map<String, String> data = new HashMap<>();

        // Receive data from server
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Ensure user entered a course in courseName and course actually exists
        if (username == null || password == null || username.isEmpty() || password.isEmpty()) {
            data.put("validSignIn", "false");
            data.put("validUsername", "false");
        } else {
            data = SQL_Util.signInValidation(username, password);
        }

        String json = new Gson().toJson(data);
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
