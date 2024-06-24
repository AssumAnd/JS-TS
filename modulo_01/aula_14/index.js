// IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; //number
let num3 = 3;


num1 += num2; //NUM1 = NUM1 + NUM2 //0.8
num1 += num2;
num1 += num2;



num1 = parseFloat(num1.toFixed(2))

console.log(num1)
console.log(Number.isInteger(num1))

//conversão de NUMBER para string
//Pode também se fazer a atribuição, redeclarando a variável recebendo ela mesma mais a função.
//num1 = num1.toString()
//console.log(typeof num1)

//console.log(num1.toString() + num2)


//Arredondar um valor com muitas casas decimais, minha tentativa:

//console.log(parseInt(num1))

//mas também há um método chamado tofixed. Que no parâmetro você define quantas casas decimais pode ir um valor.
//console.log(num1.toFixed(2))

//Método que retorna se número é um inteiro ou não
//console.log(Number.isInteger(num3));


//Método que retorna se uma variável é um NaN
// let temp = num1 * 'Olá'
// console.log(Number.isNaN(temp)); -- true
//let temp = num1 * '5'
//console.log(Number.isNaN(temp)); -- true


// let temp = num1 * '5'

// console.log(temp);
