

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
	    	   String query = "Select Avg(Navigate), Avg(Content), Avg(Professional), AVG(Information) from feedbackdata; ";
	    	   ResultSet rs = stmt.executeQuery(query);
	    	   if(rs.next()){
	    		   JSONObject arrayObject1 = new JSONObject();
	    		   arrayObject1.put("key", "Navigate");
	    		   arrayObject1.put("value", rs.getInt(1));
	    		   jsonArray.add(arrayObject1);
	    		   
	    		   JSONObject arrayObject2 = new JSONObject();
	    		   arrayObject2.put("key", "Content");
	    		   arrayObject2.put("value", rs.getInt(2));
	    		   jsonArray.add(arrayObject2);
	    		   
	    		   JSONObject arrayObject3 = new JSONObject();
	    		   arrayObject3.put("key", "Professional");
	    		   arrayObject3.put("value", rs.getInt(3));
	    		   jsonArray.add(arrayObject3);
	    		   
	    		   JSONObject arrayObject4 = new JSONObject();
	    		   arrayObject4.put("key", "Information");
	    		   arrayObject4.put("value", rs.getInt(4));
	    		   jsonArray.add(arrayObject4);
	    		   
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
