package Basic;

public class Agenda {
    private String nome;
    private String Telefone;

    public Agenda(String nome, String Telefone) {
        this.nome = nome;
        this.Telefone = Telefone;
    }
    
    public Agenda(){
        this.nome = "";
        this.Telefone = "";
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return Telefone;
    }

    public void setTelefone(String Telefone) {
        this.Telefone = Telefone;
    }
   
}
