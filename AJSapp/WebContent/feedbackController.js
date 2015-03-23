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
			  
			  $scope.rate = 7;
			  $scope.max = 10;
			  $scope.isReadonly = false;

			  $scope.hoveringOver = function(value) {
			    $scope.overStar = value;
			    $scope.percent = 100 * (value / $scope.max);
			  };

			  $scope.ratingStates = [
			    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
			    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
			    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
			    {stateOn: 'glyphicon-heart'},
			    {stateOff: 'glyphicon-off'}
			  ];
//			 $scope.overallrating = function(){
//				 var sum = 0;
//				 for( var i=0; i< $scope.feedback.length; i++){
//					 sum = sum + parseInt($scope.feedback[i].value);
//				 }
//				 return sum/($scope.feedback.length) ;
//			 }
	 });
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
 