package com.candev.tuto.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mysql.jdbc.PreparedStatement;

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
		Map<String, String[]> parameterMap = request.getParameterMap();
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String remember = request.getParameter("remember");
		System.out.println("remember = "+remember);
		Set<String> keySet = parameterMap.keySet();
		
		StringBuffer sb = new StringBuffer();
		
		for (Iterator<String> iterator = keySet.iterator(); iterator.hasNext();) {
			String key = (String) iterator.next();
			String[] value = parameterMap.get(key);
			
			sb.append("key="+key);
			sb.append(". value"+value[0]);
		}
		
		//error list
		boolean emptyEmail = false; //user enter empty
		boolean badEmailFormat = false;
		boolean emptyPassword = false;
		boolean bad_username_or_password  = false;
		
		
		//validate form
		//we dont need this. moved to javascript
		if(email == null || email.length()==0){ 
			//resend login jsp with error message
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("/login.jsp");
			request.setAttribute("username_error", "username_error");
			requestDispatcher.forward(request, response);
		}else if(checkIfUserExist(email,password)){
			ServletOutputStream outputStream = response.getOutputStream();
			String resp = "user "+email+"  exist";
			request.setAttribute("badCredentials", "none");
			outputStream.write(resp.getBytes());
		}else{
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("/login.jsp");
			request.setAttribute("badCredentials", "block");
			request.setAttribute("login", "block");
			request.setAttribute("register","none");
			requestDispatcher.forward(request, response);
		}
	}

	private boolean checkIfUserExist(String email, String password) {
		
		try {
			System.out.println("email="+email + ".password = "+password);
			String sql = "select email from user where email = ? and password = ?";
			String connectionURL = "jdbc:mysql://127.0.0.1:3306/java_tuto";
			Class.forName("com.mysql.jdbc.Driver");
			Connection connection = DriverManager.getConnection(connectionURL, "root", "mysqlpass1");
			 java.sql.PreparedStatement statement = connection.prepareStatement(sql);
			statement.setString(1, email);
			statement.setString(2, password);
			ResultSet resultSet = statement.executeQuery();
			 boolean next = resultSet.next();
			System.out.println("resultSet.next = "+next);
			return next;
			
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
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
