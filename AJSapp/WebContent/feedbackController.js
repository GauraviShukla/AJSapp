 tdArray =[]; 
 app.controller("feedbackController",function($scope, $http){
	 $http.get("http://localhost:8080/AJSapp/getInitialData")
	 .success( function(response){
			 for(var i=0; i< response.length; i++){
				 var tdArrayObj ={};
				 var reponseobj = response[i];
				 tdArrayObj.parent = reponseobj.key;
				 tdArrayObj.value = reponseobj.value;
				 tdArray.push(tdArrayObj);
			 }
			 $scope.feedback = response;
			 $scope.max = 5;

	 });
	 
	 $scope.closeAlert = function(){
		 $scope.alert.showAlert = false;
	 }
	 
	 $scope.login = function(){
		 var userName = document.getElementById("user").value;
		 var pass = document.getElementById("pass").value;
		 var req = {
				 url: "http://localhost:8080/RunServlets/Login?user="+userName+"&pass="+pass,
				 type :"GET",
				}
		 
		 $http(req)
			 .success( function(data){
				 if(data == "Successful"){
					 $scope.alert = { showAlert: true, type: 'success', msg: 'Login success.' };
					 setTimeout(function(){
						 var popupDiv = document.getElementById("popupWrapper");
					     popupDiv.style.display = "none";
						 var newDiv = document.getElementById("giveFeedback");
						 newDiv.style.display = "block";
					     var div = document.getElementById("showRating");
						 div.style.display = "none";
					 },2000);
				 } else if(data == "Failed"){
					 $scope.alert = { showAlert: true, type: 'danger', msg: 'login Failed.' };
				 }
				 
			 })
			 .error( function(data){
				 $scope.alert = { showAlert: true, type: 'danger', msg: 'error Failed.' };
			 });
	 }
	 
	 
	 $scope.ratingOptions = [{value: "Strongly agree"}, {value: "Agree" }, { value: "Neutral"}, { value: "Disagree"}, { value: "Strongly disagree"}];
	 $scope.MCQs = [ { index: 1, ques: "The website is easy to navigate", ans:0, MCQoptions:[{value:5}, {value:4}, {value:3}, {value:2},{value:1}]}, 
	                 { index: 2, ques: "Content are displayed properly across the website", ans:0, MCQoptions:[{value:5}, {value:4}, {value:3}, {value:2},{value:1}]}, 
	                 { index: 3, ques: "I found the website professional", ans:0, MCQoptions:[{value:5}, {value:4}, {value:3}, {value:2},{value:1}]}];
	 $scope.Questions =[
	                    {no: "Q1", Ques: "Did you find what you needed?", ans:0, options:[
	                                                                     { option: "Yes, all of it", value: 5},
	                                                                     { option: "Yes, some of it", value: 3},
	                                                                     { option: "No, none of it", value: 1}
	                    												]},
	                    {no: "Q2", Ques: "Please tell us how easy it is to find information on the site.", ans:0, options:[
											                                                                     { option: "Very easy", value: 5},
											                                                                     { option: "Easy" , value:4},
											                                                                     { option: "Average", value: 3},
											                                                                     { option: "Difficult", value: 2},
											                                                                     { option: "Very difficult", value: 1}
											                                                                 ]},		
	                    {no: "Q3", Ques: "Mention any features or functionalities that you think we should add on the website"}											
	                 ];
	 $scope.submitValue = 0;
	 $scope.calculate = function(){
		 var sum = 0;
		 var counter =0;
		 for(var i=0; i<$scope.MCQs.length; i++){
			 sum = sum + $scope.MCQs[i].ans ;
			 counter++;
		 }
		 for(var i=0; i<$scope.Questions.length; i++){
			 sum = sum + $scope.MCQs[i].ans ;
			 counter++;
		 }
		 $scope.submitValue = sum/counter;
	 	}

 });
 