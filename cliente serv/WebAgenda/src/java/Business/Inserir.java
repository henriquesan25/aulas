package Business;

import Basic.Agenda;

public class Inserir {
   public Agenda InserirAgenda(String contato, String Telefone) {
       Agenda agenda = new Agenda (contato,Telefone);
       return agenda;
    }
    
}
