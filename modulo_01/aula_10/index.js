//Dados primitivos são strings, number, undefined e boolean 

//strigns

const nome = 'Anderson';
const nome1 = "Anderson";
const nome2 = `Anderson`;


//number

const num1 = 10;
const num2 = 10.52;

//undefined - não aponta pra lugar nenhum na memória

let nomeAluno;
const sobrenomeAluno = null; //NULO > Há um valor auqi

//boolean - Apenas duas possibilidades de valor. Variável de lógica

const aprovado = true
const reprovado = false


console.log("A var nome (" + nome + ") é identificada como " + typeof nome)

// const array = [1, 2];
// const b = array; // esse valor é cópia

// //console.log(array, b)

// b.push(3)

// console.log(array, b)


let a = 2
let b = a
console.log(a, b) //2 , 2

a = 3;
console.log(a, b) // 3, 2
