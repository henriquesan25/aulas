/*const{createServer,request}=require('http')
let server = createServer((request,Response)=>{
Response.writeHead(200,{"Content_type": "text/html"});
Response.write('<h1>Ola Mundo</h1><p>Projeto</p>');
Response.end();
});
server.listen(8000);
console.log('Projeto Iniciado');*/

let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("ROTA GET");
});

app.get("/apresentar", function (req, res) {
  // res.send('rota 1');
  let param1 = req.query.nome;
  let param2 = req.query.n1;
  let param3 = req.query.n2;
  let soma = parseInt(param2) - parseInt(param3);
  res.send(" ola seu nome é: " + param1 + ", e sua idade é:  " + soma);
  //res.send(`Olá -  ${param1} - ${parseInt(param2) + parseInt(param3) }`);
});
app.get("/tabuada", function (req, res) {
  let j = req.query.j;

  for (i = 1; i <= 10; i++) {
    res.send(j + " X " + i + " = " + j * i);
  }
});

app.listen(3000, function () {
  console.log("Projeto iniciado na porta 3000");
});
