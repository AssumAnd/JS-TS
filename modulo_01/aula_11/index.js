//Aula sobre operadores aritméticos, atribuição e incremento

/*
- Aritméticos 

. + = Adição / Concatenação
. ++ = Operador de incremento
. -- = Operador de decremento 
. - = Subtração
. / = Divisão
. * = Multiplicação
. ** = Potenciação. Elevado a
. %  = Resto da divisão



let num1 = 5
let num2 = 2

console.log(num1 + num2) //resultado esperado é 7
console.log(num1 - num2) //resultado esperado é 3
console.log(num1 * num2) //resultado esperado é 10
console.log(num1 / num2) //resultado esperado é 2.5
console.log(num1 ** num2) //resultado esperado é 25
console.log(num1 % num2) //resultado esperado é 1

console.log('----------')
let num3 = '5'
let num4 = '10'

console.log(num3 + num4) //No caso de string, a adição irá fazer a concatenação ao invés da soma. 

console.log('----------')

*/

let contador = 1;
contador++; //Atribuição de novo valor. O valor da variável + 1
contador++; //Atribuição de novo valor. O valor da variável + 1
contador++; //Atribuição de novo valor. O valor da variável + 1
contador++; //Atribuição de novo valor. O valor da variável + 1
console.log(contador);

let contagem = 10
contagem--; //Decremento de valor. O valor da variável - 1
contagem--; //Decremento de valor. O valor da variável - 1
contagem--; //Decremento de valor. O valor da variável - 1
contagem--; //Decremento de valor. O valor da variável - 1
console.log(contagem)



console.log('----------------')


let conta = 2
//const passo = 50

// conta = conta + passo;
// console.log(conta);
// conta = conta + passo;
// console.log(conta);
// conta = conta + passo;
// console.log(conta);

conta *= 30; //A variável multiplicada a 

console.log(conta)

console.log('----------------------')

//Cuidado com os tipos de dados. Tentar somar string com number o resultado é NaN


//parseInt é responsável por converter a string para um valor númerico inteiro
//parseFloat // analisa as casas decimais.

const num1 = 10;
const num2 = Number('5.2');
console.log(num1 + num2)

console.log(typeof num2)


