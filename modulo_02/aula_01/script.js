/*
Operadores de compraração
=   - atribuição
>   - maior que
>=  - maior que ou igual a
<   - menor que 
<=  - menor que ou igual a 
==  - igualdade entre dois operandos. Se um é igual ao outro (Valor)
=== - igualdade estrita (Valor e tipo)
!=  - diferença entre dois operandos. Se um é igual ao outro (Valor)
!== - diferença estrita (Valor e tipo)

*/

/*
//        >
const expressao = 10 > 5
console.log(expressao)
*/

/*
//        >=
const expr = 5>= 5
console.log(expr)
*/

/*
//        <
const expr = 10 < 11
console.log(expr)
*/

/*
//        <=
const expr = 11 <= 11
console.log(expr)
*/

/*
//         ==
const expr = 10 == '10'
console.log(expr) 
// Neste caso dará true. Por mais que seja o mesmo número os dados primitivos são alterados entre number e string. Esse operador de comparação checa apenas a igualdade de valores.
*/


/*
//        ===
const expr = 11 === '11'
const real = 11 === 11
console.log(expr)
console.log(real)
//Nesse exemplo dará false e true. Pois por mais que estejamos falando do mesmo número, esse operador checa valor E tipo. Precisa ser estreitamente igual
*/

/*
//        !=
const expr = 10 != '10'
console.log(expr) 
//Mesma coisa do exemplo assim, dará false por mais que seja diferente em tipos primitivos, mas o valor é o mesmo. 10 não é diferente de 10.
*/

/*
//        !==
const expr = 10 !== '10'
console.log(expr)
//Aqui deu true. Já que por mais que o valor seja o mesmo, o tipo de dado não é. 10 é diferente de '10' 
*/