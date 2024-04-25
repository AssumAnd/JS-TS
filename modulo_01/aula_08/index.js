/*
Anderson Assum nasceu em 2003, tem 21 anos e seu índice de massa corporal é 32.6530612244898
*/

const nome = 'Anderson'; //é const porquê não altera. 
const sobrenome = 'Assum';
const nomeCompleto = nome + " " + sobrenome;
const idade = 21;
const peso = 100;
const altura = 1.75;

let imc;
let anoNascimento;


imc = peso / (altura * altura);

anoNascimento = 2024 - idade;

//console.log(anoNascimento)


//console.log(imc)

//template strings é o módo de invés de concatenar strings, transforma toda a frase em uma string e referencia apenas as variáveis. Ex:
// console.log(`${nomeCompleto} nasceu em ${anoNascimento}, tem ${idade} anos e seu índice de massa corporal é ${imc}`)
//Maneira mais moderna e legível de se fazer.

console.log(nomeCompleto + ' nasceu em ' + anoNascimento + ', tem ' + idade + " anos" + ' e seu índice de massa corporal é ' + imc);
