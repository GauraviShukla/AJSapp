
function submitFeedback(userName){
	
}
function openLoginPopup(){
	var div = document.getElementById("popupWrapper");
	div.style.display = "block";
}
    
 function cancelLogin(){
    	var div = document.getElementById("popupWrapper");
    	div.style.display = "none";
    }
 function login(){
	 var userName = document.getElementById("user").value;
	 var pass = document.getElementById("pass").value;
	 
	 $.ajax({
		 url: "http://localhost:8080/RunServlets/Login",
		 type :"GET",
		 data: {"user": userName, "pass": pass },
		 success: function(data){
			 if(data == "Successful"){
			     var popupDiv = document.getElementById("popupWrapper");
			     popupDiv.style.display = "none";
				 var newDiv = document.getElementById("giveFeedback");
				 newDiv.style.display = "block";
			     var div = document.getElementById("showRating");
				 div.style.display = "none";
			 } else if(data == "Failed"){
				 
			 }
			 
		 },
		 error: function(data){
			 alert(data);
		 }
	 });
 }