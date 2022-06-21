/* Para fazer uso do framework Express, antes de tudo é necessário fazer a instalação do mesmo.
   Para fazer a instalação basta digitar no terminal: npm install express
   Observação: Para a instalação ser bem sucedida, o terminal precisará estar no mesmo diretório do projeto. 
   Você pode conferir o guia de instalação mais detalhado em: https://expressjs.com/pt-br/starter/installing.html 
*/

let express = require("express");
let app = express();
const port = 3000; // Inicia um servidor na porta 3000

app.get('/exercicio1', function (req, res) {
    let currentYear = parseInt(req.query.currentYear); // Inicializa uma variável chamada "currentYear", com o valor enviado no campo "Ano Atual" do html.
    let birthYear = parseInt(req.query.birthYear); // Inicializa uma variável chamada "birthYear", com o valor enviado no campo "Ano de Nascimento" do html.
    let age = parseInt(currentYear) - parseInt(birthYear); // Inicializa uma variável chamada "age", com o valor do currentYear subtraído pelo valor do birthYear.
    res.send(`A sua idade é ${age} e seu nome é ${req.query.name}`); // Envia uma string concatenando o valor de age e de name.
});

app.get('/exercicio2', function (req, res) { 
    let number = parseInt(req.query.number); // Inicializa uma variável chamada "number", com o valor enviado no campo "Escolha um número inteiro" do html.
    let factorial = number; // Inicializa uma variável chamada "factorial", com o mesmo valor de number.
    for (let i=1; i < number; i++) { // Cria uma estrutura de repetição for, incrementando o valor de i enquanto ele for menor que number.
        factorial *= i; // Realiza a operação factorial = factorial * i dentro da estrutura de repetição
    }
    res.send(`O número fatorial de ${number} é: ${factorial}`); // Envia uma string concatenando o valor de number e de factorial.
});

app.get('/exercicio3', function (req, res) {
    let salary = parseInt(req.query.salary);  // Inicializa uma variável chamada "salary", com o valor enviado no campo "Insira um salário".
    let percentage; // Inicializa uma variável chamada "percentage".
    let increase; // Inicializa uma variável chamada "increase".
    let adjustedSalary; // Inicializa uma variável chamada "adjustedSalary".
    if (salary <= 250) { // Cria uma estrutura condicional if-else, com a condição: se o salário for menor ou igual a 250.
        percentage = 0.2; // Define o valor de percentage como 0.2, caso o salário seja menor ou igual a 250.
        increase = salary * percentage; // Define o valor de increase como o valor de salary multiplicado pelo valor de percentage, caso o salário seja menor ou igual a 250.
        adjustedSalary = salary + increase; // Define o valor de adjustedSalary como o valor de salary somado com o valor de increase, caso o salário seja menor ou igual a 250.
    }
    else if (salary  > 250 && salary < 600) { // Parte da estrutura condicional if-else, estabelecendo uma outra condição: se o salário for maior que 250 e menor que 600.
        percentage = 0.15; // Define o valor de percentage como 0.15, caso o salário seja maior que 250 e menor que 600.
        increase = salary * percentage; // Define o valor de increase como o valor de salary multiplicado pelo valor de percentage, caso o salário seja maior que 250 e menor que 600.
        adjustedSalary = salary + increase; // Define o valor de adjustedSalary como o valor de salary somado com o valor de increase, caso o salário seja maior que 250 e menor que 600.
    }
    else if (salary > 600 && salary < 1500) { // Parte da estrutura condicional if-else, estabelecendo uma outra condição: se o salário for maior que 600 e menor que 1500.
        percentage = 0.1; // Define o valor de percentage como 0.1, caso o salário seja maior que 600 e menor que 1500.
        increase = salary * percentage; // Define o valor de increase como o valor de salary multiplicado pelo valor de percentage, caso o salário seja maior que 600 e menor que 1500.
        adjustedSalary = salary + increase; // Define o valor de adjustedSalary como o valor de salary somado com o valor de increase, caso o salário seja maior que 600 e menor que 1500.
    }
    else if (salary > 1500) { // Parte da estrutura condicional if-else, estabelecendo uma outra condição: se o salário for maior que 1500.
        percentage = 0.05; // Define o valor de percentage como 0.05, caso o salário seja maior que 1500.
        increase = salary * percentage; // Define o valor de increase como o valor de salary multiplicado pelo valor de percentage, caso o salário seja maior que 1500.
        adjustedSalary = salary + increase; // Define o valor de adjustedSalary como o valor de salary somado com o valor de increase, caso o salário seja maior que 1500.
    }
    res.send(`O salário antes do reajuste é: ${salary}; o percentual de aumento aplicado é: ${percentage * 100}%
    O valor do aumento é: ${increase} e o novo salário, após o aumento é: ${adjustedSalary}`); // Envia uma string concatenando o valor de salário, percentage, increase e adjustedSalary
});

app.get('/exercicio4', function (req, res) {
    let number = parseInt(req.query.number); // Inicializa uma variável chamada "number", com o valor enviado no campo "Insira um número".
    var oddNumbers = []; // Inicializa um vetor chamado "oddNumbers".
    for (let i = 1; i < number; i += 2) { // Cria uma estrutura de repetição for, definindo o valor de i como 1 no inicializador, o valor de i ser menor que number e realizando a operação i = i + 2 no iterador
        var add = oddNumbers.push(i); // Adiciona o valor de i no vetor oddNumbers, dentro da estrutura de repetição.
    }
    res.send(oddNumbers); // Exibe o valor de todas as posições do vetor oddNumbers.
});

app.get('/exercicio5', function (req, res) {
    let number = parseInt(req.query.number); // Inicializa uma variável chamada "number", com o valor enviado no campo "Insira um número".
    var n = []; // Inicializa um vetor chamado "n".
    for (let i=1; i<=number; i++) { // Cria uma estrutura de repetição for, definindo o valor de i como 1 no inicialiador, definindo a condição como o valor de i ser menor ou igual ao de number e incrementando +1 na variável i.
        for (let j=0; j<i; j++) { // Cria uma estrutura de repetição for, dentro da outra, definindo o valor de j como 0 no inicializador, definindo a condição como j sendo menor que i e incrementando +1 na variável j.
            var add = n.push(i); // Adiciona o valor de i no vetor n, dentro da estrutura de repetição.
        }
    }
    res.send(n); // Exibe o valor de todas as posições do vetor n.
});


app.get('/exercicio6', function (req, res) {
    let hour = parseInt(req.query.hour);  // Inicializa uma variável chamada "hour", com o valor enviado no campo "Insira a hora".
    let minutes = parseInt(req.query.minutes); // Inicializa uma variável chamada "minutes", com o valor enviado no campo "Insira os minutos".
    let hourToMinutes = hour * 60; // Inicializa uma váriavel chamada "hourToMinutes", com o valor de hour multiplicado por 60.
    let totalMinutes = hourToMinutes + minutes; // Inicializa uma variável chamada "totalMinutes", com o valor de hourToMinutes somado com minutes.
    let seconds = totalMinutes * 60; // Inicializa uma variável chamada "seconds", com o valor de totalMinutes multiplicado por 60.
    res.send(`A hora convertida em minutos é: ${hourToMinutes} o total de minutos é: ${totalMinutes} e o total de segundos é: ${seconds}.`); // Envia uma string concatenando o valor de hourToMinutes, totalMinutes e seconds.
});

app.get('/exercicio7', function (req, res) {
    let number = parseInt(req.query.number); // Inicializa uma variável chamada "number", com o valor enviado no campo "Insira um número"
    var currentMultiplication = []; // Inicializa um vetor chamado "currentMultiplication".
    for (let i=0; i<11; i++) { // Cria uma estrutura de repetição for, definindo o valor de i como 0 no inicializador, definindo a condição como i ser menor que 11 e incrementando +1 no valor de i.
        let result = number * i; // Cria uma variável chamada "result", definindo o valor dela como o valor de number multiplicado por i. 
        multiplication = `${number} * ${i} = ${result}`; // Cria uma string concatenando os valores de number, i e result.
        var add = currentMultiplication.push(multiplication); // Adiciona a string para uma posição do vetor currentMultiplication.
    };
    res.send(currentMultiplication); // Exibe todas as posições do vetor currentMultiplication.
});



app.listen(3000, function () { // Escuta a porta 3000 por conexões
    console.log(`application running in port: ${port}`); // Exibe uma mensagem no log do console, indicando que a aplicação
});                                                      // está rodando e em qual porta.