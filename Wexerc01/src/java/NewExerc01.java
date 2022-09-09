
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class NewExerc01 extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
      
         double Salario = Double.parseDouble(request.getParameter("Salario"));
         double FGTS = 0.08;
         double Soma;
         double INSS = 0;
         double IR = 0;
         
          Soma = Salario * FGTS;
        
            if(Salario == 1045.00){
                INSS = (Salario*0.075);
            }
            else if(Salario >=1045.01 && Salario<= 2089.60){
                INSS = (Salario*0.090);
            }
            else if(Salario>= 2089.61 && Salario<= 3134.40){
                INSS =  (Salario*0.012);
            }
            else if(Salario>= 3134.41 && Salario<=6101.60){
                INSS = (Salario*0.014);
            }
            
            if(Salario == 0 && Salario<= 1903.98){
            IR =  (Salario*0.00);
            }
            else if(Salario >= 1903.99 && Salario<= 2826.65){
            IR = (Salario*0.075);
            }
            else if(Salario >= 2826.66 && Salario<= 3751.05){
            IR = (Salario*0.150);
            }
            else if(Salario >= 3751.06 && Salario<= 4664.68){
            IR = (Salario*0.2250);
            }
             else if(Salario >= 3751.06 && Salario<= 4664.68){
            IR =  (Salario*0.2250);
            }
             else if(Salario>= 4664.68 ){
            IR = (Salario*0.2750);
            }
     
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("");            
            out.println("</head>");
            out.println("<body>");
            out.println("Valor do salario Bruto: "+ Salario 
                                    +"<hr><br>Valor do FGTS: " +Soma
                                    +"<hr><br>Valor do INSS: " +INSS
                                    +"<hr><br>Valor do IR: "+IR
                                    +"<hr><br>Salario Liquido: " + (Salario - (INSS+IR)));
   
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
