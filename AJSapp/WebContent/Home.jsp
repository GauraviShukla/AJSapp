<body>
		<h1>Feedback ratings</h1>
		<table  class="table table-hover table-striped">
			<thead>
				<tr>
					<th>Topic</th>
					<th>Ratings</th>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="x in feedback">
					<td >{{x.key}}</td>
					<td id="{{x.key}}">
					<% int count = 5; %>
					<% 
						for(int i=1; i<=count; i++ ) { 
							System.out.print("one star");
					%>
						 <span class="glyphicon glyphicon-star"></span> 
					<% } %>
					</td>
				</tr>
			</tbody>
		</table>
<!-- 		{{appendStars()}} -->
		<h1>{{overallrating()}}</h1>
		<h3>
			<a id="loginLink" onclick="openLoginPopup()">Login</a> to submit you
			feedback
		</h3>
</body>