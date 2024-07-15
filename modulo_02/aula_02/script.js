/*
Operadores Lógicos

&& -> AND -> E -> Para retornar true, todas as expressões precisam estar true. Caso apenas uma esteja em false toda a operação será negativada
|| -> OR -> OU
! -> NOT -> NÃO

*/
/*
// Para o operador & funcionar todas as expressões precisam estar verdadeiras. Ex:
const expressao = true && true && true && true
const expressaoN = true && false && true && true
console.log(expressao) // false
console.log(expressaoN) // true

*/

/*
//Funciona de modo contrário. Para o operador || funcionar, apenas UM operador ou mais precisa estar em verdadeiro.
const expressaoOr = false || true || false || false
const expressaoOr2 = false || false || false || false
console.log(expressaoOr) // true
console.log(expressaoOr2) // false
*/

/*
//Exemplo prático de expressão &&
const usuario = 'Anderson';
const senha = '1454261'

const vaiLogar = usuario ==='Anderson' && senha === '1454261'
const jaLogou = usuario === 'Anderson' && senha ==='99999'
console.log(vaiLogar) //true
console.log(jaLogou) //false

*/





//Exemplo prático da expressão ||
/*
const usuario = 'Anderson';
const senha = '1454261'

//Como essa expressão precisa de apenas um valor verdadeiro para a execução, apenas de acertar o nome já resultaria em true. Mas caso eu erre TODOS as expressões ele sim daria em false.
const veradeiro = usuario === 'Anderson' || senha === '1454261'
const vaiLogar = usuario === 'Anderson' || senha === '99999'
const jaLogou = usuario === 'Assum' || senha === '99999'
console.log(veradeiro) // true
console.log(vaiLogar) //true
console.log(jaLogou) // false
*/




// O símbolo ! é para inverter uma expressão. Utilizado de forma inversa ao que está no código. Ex
/*
console.log(true) // true
console.log(!true) // false
console.log(false) // false
console.log(!false)// true
*/