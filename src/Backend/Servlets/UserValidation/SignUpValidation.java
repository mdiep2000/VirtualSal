package Backend.Servlets.UserValidation;
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

@WebServlet("/signupvalidation")
public class signUpValidation extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public signupvalidation() {
        super();
    }

    // Parameters from frontend: "username" & "password"
    /* FRONT END NOTES: .... */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            SQL_Util.initConnection();
        Map<String, String> data = new HashMap<>();
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        data = SQL_Util.signupValidation(username, email);
        if(data.get("validUserName").equals("true") && data.get("validEmail").equals("true")){
        	String firstname = request.getParameter("firstname");
        	String lastname = request.getParameter("lastname");
        	String pw = request.getParameter("password");
        	SQL_Util.addUser(firstname, lastname, username, email, pw);
        }
        String clientOrigin = request.getHeader("origin");
        response.setHeader("Access-Control-Allow-Origin", clientOrigin);
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
