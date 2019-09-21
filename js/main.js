/*
if(jQuery){
	alert("jQuery is active");
}else{
	alert("jQuery is not active");
}
*/


$("#contact-form").submit( function(){
	
	var errors = "";
	
	var name = $("#name").val();
	if (name == ""){
		errors = errors + "<li>Need to provide your name</li>";
	}
	
	var email = $("#email").val();
	if (email == ""){
		errors = errors + "<li>Need to enter your email</li>";
	}
	
	var comments = $("#comments").val();
	if (comments == ""){
		errors = errors + "<li>Must write a comment</li>";
	}
	
	
	if (errors != ""){
		$("#error-list").html(errors);
		return false;
	}
	
	return true;
});