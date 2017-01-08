$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	
	 $('#sign-up-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$('#register-form-link').addClass('active');
		e.preventDefault();
	});
	 
	 $('#login-link').click(function(e) {
			$("#login-form").delay(100).fadeIn(100);
	 		$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
	 
	 $('#permissions_link').click(function() {
		 $('#roles').css('display','none');
		$('#permissions').css('display','block');
	});
	 
	 $('#roles_link').click(function() {
		$('#roles').css('display','block');
		$('#permissions').css('display','none');
		
	});
	 
//	 $('#register-submit').click(function(e){
//		 $.ajax(
//				 {
//					 url:"/sweepee/RegisterAccountHandler",
//					 success:function(result){
//						 
//						 		$('#div1').html('<p>SUCCESS</p>');
//					 
//					 		}
//				 }
//		 
//		 );
//	 });
	 
//	 $('#login-submit').click(function(e){
//		
//			//validate email
//		 var email = $('#email').val();
//		 console.log('dsdasdasd');
//		 	
//	 });
	 
	 

});

function checkPermission(){
	return true;
}

function validateLoginData(){
	
	
	
	var userEmail = document.forms["login-form"]["email"].value;
	var password = document.forms["login-form"]["password"].value;
	
	var hasEmailError = false;
	var hasPasswordError = false;
	
	if (!userEmail) {
		hasEmailError =  true ;
		$('#emailError').show();
	}
	
	
	
	if (!password) {
	    
		hasPasswordError =  true ;
		$('#passwordError').show();
	}	
	
	return !hasEmailError && !hasPasswordError;
	
}

function htmlbodyHeightUpdate(){
	var height3 = $( window ).height();
	var height1 = $('.nav').height()+50;
	height2 = $('.main').height();
	if(height2 > height3){
		$('html').height(Math.max(height1,height3,height2)+10);
		$('body').height(Math.max(height1,height3,height2)+10);
	}
	else
	{
		$('html').height(Math.max(height1,height3,height2));
		$('body').height(Math.max(height1,height3,height2));
	}
	
}
$(document).ready(function () {
	htmlbodyHeightUpdate();
	$( window ).resize(function() {
		htmlbodyHeightUpdate();
	});
	$( window ).scroll(function() {
		height2 = $('.main').height();
			htmlbodyHeightUpdate();
	});
});


