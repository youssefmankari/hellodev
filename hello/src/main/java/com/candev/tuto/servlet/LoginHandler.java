package com.candev.tuto.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;

import com.candev.tuto.database.DatabaseHelper;
import com.candev.tuto.pojo.User;
import com.candev.tuto.servlet.listeners.ContextListener;

/**
 * Servlet implementation class LoginHandler
 */
public class LoginHandler extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginHandler() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//ServletOutputStream outputStream = response.getOutputStream();
		ServletContext servletContext = getServletContext();
		
		LogManager.getLogger(LoginHandler.class).info("servletContext = "+servletContext);
		
		LogManager.getLogger(LoginHandler.class).info("Thread name = "+Thread.currentThread().getName());

		Map<String, String[]> parameterMap = request.getParameterMap();
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String remember = request.getParameter("remember");
		LogManager.getLogger(LoginHandler.class).info("remember = "+remember);

		Set<String> keySet = parameterMap.keySet();
		
		StringBuffer sb = new StringBuffer();
		
		for (Iterator<String> iterator = keySet.iterator(); iterator.hasNext();) {
			String key = (String) iterator.next();
			String[] value = parameterMap.get(key);
			
			sb.append("key="+key);
			sb.append(". value"+value[0]);
		}
		
		//error list
//		boolean emptyEmail = false; //user enter empty
//		boolean badEmailFormat = false;
//		boolean emptyPassword = false;
//		boolean bad_username_or_password  = false;
		
		
		// validate form
		// we dont need this. moved to javascript
		if (email == null || email.length() == 0) {
			// resend login jsp with error message
			RequestDispatcher requestDispatcher = request
					.getRequestDispatcher("/login.jsp");
			request.setAttribute("username_error", "username_error");
			requestDispatcher.forward(request, response);
		} else {
			User user = DatabaseHelper.checkIfUserExist(new User(email,
					password));

			if (user != null) {
				// ServletOutputStream outputStream =
				// response.getOutputStream();
				// String resp = "user "+email+"  exist";
				HttpSession session = request.getSession();
				session.setAttribute("user", email);
				session.setAttribute("existingUser", user);
				request.setAttribute("badCredentials", "none");
				// outputStream.write(resp.getBytes());
				RequestDispatcher requestDispatcher = request
						.getRequestDispatcher("/index.jsp");
				// request.setAttribute("username_error", "username_error");
				requestDispatcher.forward(request, response);
			} else {
				RequestDispatcher requestDispatcher = request
						.getRequestDispatcher("/login.jsp");
				request.setAttribute("badCredentials", "block");
				request.setAttribute("login", "block");
				request.setAttribute("register", "none");
				requestDispatcher.forward(request, response);
			}
		}
	}

	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
