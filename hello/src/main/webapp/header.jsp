<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

<script type="text/javascript" src="script.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<title>Insert title here</title>

<%@ taglib prefix="c" 
           uri="http://java.sun.com/jsp/jstl/core" %>
</head>
<body>

	<div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
           <div class="container-fluid">
                <div class="navbar-header">
			<img src="images/sweepee_logo.png" href="#" class="navbar-brand"
				alt="sweepee" width="204" height="404">
		</div>

				<ul class="nav navbar-nav navbar-right">
				
            
				
				<c:if test="${empty sessionScope.existingUser }">
					
					<li><a href="/sweepee/RegisterAccountHandler"><span
							class="glyphicon glyphicon-user"></span> Sign Up</a></li>
					<li><a href="/sweepee/login.jsp"><span
							class="glyphicon glyphicon-log-in"></span> Login</a></li>
							
				</c:if>
				
				<c:if test="${not empty sessionScope.existingUser }">
							
					<li><a href="/sweepee/LogoutHandler"><span
							class="glyphicon glyphicon-log-out"></span> Log Out</a></li>
							</c:if>

					<c:if test="${not empty sessionScope.existingUser.email }">
						<li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><c:out value="${sessionScope.existingUser.email}"/> <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">My Profile</a></li>
                <li><a href="#">New Sweepee</a></li>
                <li><a href="#">My Sweepees</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
							
						</c:if>
						
						<c:if test="${sessionScope.existingUser.isAdmin()}">
						
					<li><a href="/sweepee/ctrlpanel"><span
							class="glyphicon glyphicon-wrench"></span> Control Panel</a></li>
							</c:if>

				</ul>

			</div><!-- container -->
      </div><!-- navbar-inner -->
 </div><!--  navbar navbar-fixed-top -->
 


</body>
</html>

