// Não podemos criar constante com palavras reservadas. Por ex: const = let. const = var. const = const.
// Constantes precisam ter nomes significativos, pois nunca alteram seu valor.
// Não pode começar o nome de uma constante com um número.
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

// let nome = 'Anderson'
// nome = 'Assum'
// console.log(nome) A atribuição é dada para o último declarado


// const nome = 'Anderson'
// nome = 'Assum'
// console.log(nome) Neste caso ocorre um erro, pois uma variável const foi modificada, e por isso, não funciona


// Operadores aritiméticos
// = - * / 

const primeiroNumero = '5';
const segundoNumero = 10;
const terceiroNumero = 70

const resultado = (primeiroNumero * segundoNumero) + terceiroNumero ;

let resultadoTriplicado = resultado * 3



//Alterando o valor dentro da let

resultadoTriplicado = resultadoTriplicado - 10


// console.log(resultadoTriplicado)
//typeof é responsável por dizer o tipo da variável, se é string ou se é number
console.log(typeof primeiroNumero)