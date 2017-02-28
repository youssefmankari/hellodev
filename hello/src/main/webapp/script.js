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
		 getPermissions();
		 $('#roles').css('display','none');
		$('#permissions').css('display','block');
		$('#categories').css('display','none');
	});
	 
	 $('#roles_link').click(function() {
		$('#roles').css('display','block');
		$('#permissions').css('display','none');
		$('#categories').css('display','none');
		
	});
	 
	 $('#categories_link').click(function() {
		 $('#roles').css('display','none');
		$('#permissions').css('display','none');
		$('#categories').css('display','block');
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

function getPermissions(){
//	$.get(
//			"/sweepee/testajax",
//			{name:"ajaxeamsterdam"},
//			
//			function(data){
//				$('#stage').html(data.nickName);
//				$('#tabla tr:last').after('<tr><td>rnee</td><td>bouchm</td><td>jlil@example.com</td></tr>');
//			}
//			function(data) {
//			    $.each(data, function(index, element) {
//			        $('#stage').append($('<div>', {
//			            text: element.nickName
//			        }));
//			    });}
//	);
	
	$.ajax({ 
	    type: 'GET', 
	    url: '/sweepee/getpermissions', 
	    data: { get_param: 'value' }, 
	    dataType: 'json',
	    success: function (data) { 
//	    	$('#stage').html(data[0].permissionName);
	    	$("#tabla tbody tr").remove();
	    	$.each(data, function(i, item) {
	    		//$('#stage').html(item.permissionName);
	    		
	    		$('<tr>').append(
	    	            $('<td>').text(item.id),
	    	            $('<td>').text(item.permissionName),
	    	            $('<td>').html('<span onclick="delet();"class="glyphicon glyphicon-remove"></span>')
	    	            
	    	        ).appendTo('#tabla');
	    	});
	    }
	});
}

function delet(){
	$('#tabla').find('tr').click( function(){
		  alert('You clicked row '+ ($(this).index()+1) );
		  var selectedIndex =  ($(this).index()+1);
		  
		  
		});
}

function CreatePermission(){
	alert('fha chliha');
}

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
	
	$(".dropdown").hover(            
	        function() {
	            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
	            $(this).toggleClass('open');        
	        },
	        function() {
	            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
	            $(this).toggleClass('open');       
	        }
	    );
});


