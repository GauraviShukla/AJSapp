

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class getLoginDetails
 */
@WebServlet("/getLoginDetails")
public class getLoginDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public getLoginDetails() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 final String JDBC_DRIVER ="com.mysql.jdbc.Driver";  
	       final String DB_URL="jdbc:mysql://localhost/ASJS";
	       final String USER = "root";
	       final String PASS = "";
	       
	       String userName = request.getParameter("user");
	       String password = request.getParameter("pass");
	       PrintWriter out = response.getWriter();   
	       try{
	    	   Class.forName(JDBC_DRIVER);
	    	   Connection conn = DriverManager.getConnection(DB_URL,USER, PASS);
	    	   Statement stmt = conn.createStatement();
	    	   String query = "Select * from logindetails where UserName ='"+userName+"' and Password ='"+password+"'";
	    	   ResultSet rs = stmt.executeQuery(query);
	    	   if(rs.next()){
	    		   out.print("Successful");
	    	   }
	    	   else{
	    		   out.print("Failed");
	    	   }
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
