//Desafio: Demonstar que a frase seja exibida pelo console log; "Meu nome é "NOME". Estou aprendendo Javascript às 10 da manhã." Contanto que o número 10 não esteja entre as aspas

console.log("Meu nome é Anderson.", "Estou aprendendo Javascript às", 10, "da manhã");

//outro formato, mas agora utilizando a concatenação

console.log("Meu nome é Anderson. Estou aprendendo Javascript às " + 10 + " da manhã")

//mais um formato, mas agora utilizando variáveis

var nome = 'Anderson';
var hora = 10;
console.log("Meu nome é " + nome + ". Estou aprendendo Javascript às " + hora + " da manhã")