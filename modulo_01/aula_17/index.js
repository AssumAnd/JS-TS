//arrow function é a mesma coisa que uma função normal, mas ao invés de declarar function (){ é dado apenas =>

// const raiz = (n) => {
//     return n ** 0.5;
// }


const raiz = n => n ** 0.5 

//--- é a MESMA coisa daí de cima que é a mesma coisa daquela ali de baixo

console.log(raiz(81))
console.log(raiz(100))
console.log(raiz(45))









//-----------------------------------------

//variável anonima

// const raiz = function (n) {
//     return n ** 0.5
// };


// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));




//---------------------------------



// function soma(x = 1, y = 1) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma(4, 2)
// // console.log(soma(2, 2))

// console.log(resultado)


// console.log(soma(2, 2))
// console.log(soma(3, 15))
// console.log(soma(5, 10))


// function saudacao(nome) {
//     return `Olá! Bom dia ${nome}!`
// }

// const variavel = saudacao('Anderson') //Aqui eu informei qual o dado do parâmetro utilizado acima
// console.log(variavel) 