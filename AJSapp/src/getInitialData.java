

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.*;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 * Servlet implementation class getInitialData
 */
@WebServlet("/getInitialData")
public class getInitialData extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public getInitialData() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		   response.setContentType("application/json");
		
		   JSONArray  jsonArray = new JSONArray();
		   
		   
		   final String JDBC_DRIVER ="com.mysql.jdbc.Driver";  
	       final String DB_URL="jdbc:mysql://localhost/ASJS";
	       final String USER = "root";
	       final String PASS = "";

	       try{
	    	   Class.forName(JDBC_DRIVER);
	    	   Connection conn = DriverManager.getConnection(DB_URL,USER, PASS);
	    	   Statement stmt = conn.createStatement();
	    	   String query = "Select Avg(Navigate), Avg(Content), Avg(Professional), AVG(Information), Avg(EaseOfInfo), ROUND( AVG(Overall),2) from feedbackdata; ";
	    	   ResultSet rs = stmt.executeQuery(query);
	    	   if(rs.next()){
	    		   JSONObject arrayObject1 = new JSONObject();
	    		   arrayObject1.put("key", "The website is easy to navigate");
	    		   arrayObject1.put("value", rs.getInt(1));
	    		   jsonArray.add(arrayObject1);
	    		   
	    		   JSONObject arrayObject2 = new JSONObject();
	    		   arrayObject2.put("key", "Content are displayed properly across the website");
	    		   arrayObject2.put("value", rs.getInt(2));
	    		   jsonArray.add(arrayObject2);
	    		   
	    		   JSONObject arrayObject3 = new JSONObject();
	    		   arrayObject3.put("key", "I found the website professional");
	    		   arrayObject3.put("value", rs.getInt(3));
	    		   jsonArray.add(arrayObject3);
	    		   
	    		   JSONObject arrayObject4 = new JSONObject();
	    		   arrayObject4.put("key", "Did you find Information you needed");
	    		   arrayObject4.put("value", rs.getInt(4));
	    		   jsonArray.add(arrayObject4); 
	    		   
	    		   JSONObject arrayObject5 = new JSONObject();
	    		   arrayObject5.put("key", "how easy it is to find information on the site");
	    		   arrayObject5.put("value", rs.getInt(5));
	    		   jsonArray.add(arrayObject5);
	    		   
	    		   JSONObject arrayObject6 = new JSONObject();
	    		   arrayObject6.put("key", "Overall Rating");
	    		   arrayObject6.put("value", rs.getFloat(6));
	    		   jsonArray.add(arrayObject6);
	    		   
	    	   }
	    	   response.getWriter().write(jsonArray.toJSONString());
	       }
	       catch(Exception e){
	    	   e.printStackTrace();
	       }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
