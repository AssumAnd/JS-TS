//               01234567
let umaString = 'O rato roeu a roupa do rei de roma.';
// console.log(umaString[3])
//Neste caso ele retorna a letra do índice 3. Começando de 0-1-2-3, neste caso seria a letra t



// console.log(umaString.charAt(3))

// console.log(umaString.concat(' ', 'em', ' ', 'um', ' lindo dia.'));
// console.log(umaString + ' em um lindo dia.');
// console.log(`${umaString} em um lindo dia.`);

// console.log(umaString.indexOf('o'))

//console.log(umaString.lastIndexOf('m', 3));

//console.log(umaString.match(/[a-z]/g)) // traz todas as letras minúsculas 

// console.log(umaString.search(/[x]/))
// console.log(umaString.replace(/r/g, '#'));

// console.log(umaString.length) // O length é responsável por trazer a quantidade de índices de uma string. Neste caso a variável tem 34.
//R: 34

//console.log(umaString.slice(2, 6))
//R: rat

//console.log(umaString.slice(-3))
//R: oma

// console.log(umaString.slice(-5, umaString.length - 1))
// //R: Roma


// console.log(umaString.slice(-5, -1))
// console.log(umaString.substring(umaString.length - 5))


// console.log(umaString.split(' ', 5))


console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());