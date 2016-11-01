<%@ page language="java" contentType="text/html; charset=US-ASCII"
	pageEncoding="US-ASCII"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
<!--  <meta name="viewport" content="width=device-width, initial-scale=1">-->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script type="text/javascript" src="script.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


<title>login</title>
</head>
<body>

<% String username_error = (String)pageContext.findAttribute("username_error"); 

username_error = "username_error";
%>

<%!
	int counter = 0;
%>
	<div class="page-header">
		<div class="jumbotron text-top text-center">
			<h1>Welcome to Sweepee!</h1>
			<p>Match classified items near You!</p>
		</div>
	</div>

	<div class="container">
	
	
	
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="#" class="active" id="login-form-link">Login</a>
							</div>
							<div class="col-xs-6">
								<a href="#" id="register-form-link">Register</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">


								<form id="login-form" method="post" role="form"
									style="display: block;" action="/hello/LoginHandler">



									<div class="form-group">
										<input type="text" name="email" id="email" tabindex="1"
											class="form-control" placeholder="Username" value="">
									</div>
									
									<% if (username_error!=null && username_error.equals("username_error")) { %>
															<div style="color:red;">Please, enter a valid user name! counter = <%=counter++ %></div>
															<% }  %>
															
									

									<div class="form-group">
										<input type="password" name="password" id="password"
											tabindex="2" class="form-control" placeholder="Password">
									</div>
									<div class="form-group text-center">
										<input type="checkbox" tabindex="3" class="" name="remember"
											id="remember"> <label for="remember">
											Remember Me</label>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit"
													tabindex="4" class="form-control btn btn-login"
													value="Log In">
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-lg-12">
												<div class="text-center">
													<a href="/hello/RecoverPassword" tabindex="5"
														class="forgot-password">Forgot Password?</a>
												</div>
											</div>
										</div>
									</div>
								</form>
								<form id="register-form" action="/hello/RegisterHandler"
								method="post" role="form" style="display: none;">
								<div class="form-group">
									<input type="text" name="username" id="username" tabindex="1"
										class="form-control" placeholder="Username" value="">
								</div>
								<div class="form-group">
									<input type="email" name="email" id="email" tabindex="1"
										class="form-control" placeholder="Email Address" value="">
								</div>
								<div class="form-group">
									<input type="password" name="password" id="password"
										tabindex="2" class="form-control" placeholder="Password">
								</div>
								<div class="form-group">
									<input type="password" name="confirm-password"
										id="confirm-password" tabindex="2" class="form-control"
										placeholder="Confirm Password">
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-sm-6 col-sm-offset-3">
											<input type="submit" name="register-submit"
												id="register-submit" tabindex="4"
												class="form-control btn btn-register" value="Register Now">
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>



	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>

</body>
</html>