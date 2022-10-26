package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.ArrayList;
import Business.Global;

public final class Agenda_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("    <head>\n");
      out.write("        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("        <title>JSP Page</title>\n");
      out.write("         <script>\n");
      out.write("            function Cadastrar(){\n");
      out.write("                document.frmAgenda.submit();\n");
      out.write("            }\n");
      out.write("        </script>\n");
      out.write("    </head>\n");
      out.write("    <body>\n");
      out.write("        <h1>Agenda</h1>\n");
      out.write("        <form name=\"frmAgenda\" action=\"FormularioAgenda\" method=\"get\">\n");
      out.write("            <div>\n");
      out.write("                <div>Contato</div>\n");
      out.write("                <div><input type=\"text\" name=\"contato\"/></div>\n");
      out.write("            </div>\n");
      out.write("            <div>\n");
      out.write("                <div>\n");
      out.write("                    Telefone\n");
      out.write("                </div>\n");
      out.write("                <div>\n");
      out.write("                    <input type=\"tel\" name=\"telefone\"/>\n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("            <div>\n");
      out.write("                <div><button type=\"button\" name=\"btnCadastrar\" onclick=\"Cadastrar()\">Cadastrar</button>\n");
      out.write("            </div>\n");
      out.write("        </form>      \n");
      out.write("        <div>\n");
      out.write("            <br/>\n");
      out.write("            <h2>Contatos Cadastrados</h2>\n");
      out.write("            ");

            for(int ind=0;ind< Global.agenda.size();ind++){
                out.print(Global.agenda.get(ind).getNome() + " - " + Global.agenda.get(ind).getTelefone() + "<br/>"); 
            }
            
      out.write("\n");
      out.write("        </div>\n");
      out.write("    </body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
