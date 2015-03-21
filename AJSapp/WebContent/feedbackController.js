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
//			 $scope.appendStars =function(){
//				 for(var i=0; i< tdArray.length; i++){
//					 var parent = document.getElementById(tdArray[i].parent);
//					 if(parent){
//						 $('#'+tdArray[i].parent).empty();
//						 for(var j=0; j<tdArray[i].value; j++){
//							 var element = document.createElement('span');
//							 element.setAttribute("class","glyphicon glyphicon-star");
//							 parent.appendChild(element);
//						 }
//					 }
//				 }
//				 return ;
//			 } 
			 
			 $scope.overallrating = function(){
				 var sum = 0;
				 for( var i=0; i< $scope.feedback.length; i++){
					 sum = sum + parseInt($scope.feedback[i].value);
				 }
				 return sum/($scope.feedback.length) ;
			 }
	 });
	 $scope.rate =7;
	 $scope.ratingOptions = [{value: "Strongly agree"}, {value: "Agree" }, { value: "Neutral"}, { value: "Disagree"}, { value: "Strongly disagree"}];
	 $scope.MCQs = [ { index: 1, ques: "The website is easy to navigate"}, 
	                 { index: 2, ques: "Content are displayed properly across the website"}, 
	                 { index: 3, ques: "I found the website professional"}];
	 $scope.MCQA1 =0;
	 $scope.MCQA2 =0;
	 $scope.MCQA3 =0;
	 $scope.Questions =[
	                    {no: "Q1", Ques: "Did you find what you needed?", answers:[
	                                                                     { answer: "Yes, all of it"},
	                                                                     { answer: "Yes, some of it"},
	                                                                     { answer: "No, none of it"}
	                    												]},
	                    {no: "Q2", Ques: "Please tell us how easy it is to find information on the site.", answers:[
	                                                                     { answer: "Very easy"},
	                                                                     { answer: "Easy"},
	                                                                     { answer: "Average"},
	                                                                     { answer: "Difficult"},
	                                                                     { answer: "Very difficult"}
	                    												]},		
	                    {no: "Q3", Ques: "Mention any features or functionalities that you think we should add on the website"}											
	                 ];
//	 $scope.calculateAvg = function(){
//		 alert("id");
//	 }

 });
 