/*

Primitivos (imutáveis )- String, number, boolean, undefined, null (bigint, symbol)

*/


// let a = 'A';
// let b = a; // cópia

// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);



//--------------- Referência (mutável) - array, object, function
//Neste código abaixo mesmo que apenas um elemento seja alterado, como apontam para o mesmo valor ambas são alteradas pois são valores de referência
// let c = [1, 2, 3];

// //pra se fazer uma cópia: let b == [...a]
// let d = c
// let e = d

// console.log(c, d) //[ 1, 2, 3 ] [ 1, 2, 3 ]

// c.push(4)

// console.log(c, d) //[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

// d.pop()

// console.log(c, d) // [ 1, 2, 3 ] [ 1, 2, 3 ]


// c.push('Anderson') 
// console.log(e)



//--------------- objeto


// const a = {
//     nome: 'Anderson',
//     sobrenome: 'Assum'
// }
// const b = a;

// a.nome = 'Alice'
// console.log(b)



const a = {
    nome: 'Anderson',
    sobrenome: 'Assum'
}
const b = {...a};

a.nome = 'Alice'
console.log(a)
console.log(b)
