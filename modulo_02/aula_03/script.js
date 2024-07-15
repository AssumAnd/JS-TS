/* 
Avaliação de curto-circuito

&& -> AND - Todas as expressões precisam ser verdadeiras para que AND retorne true = (false && true -> false)
|| -> OR - Todas as expressões precisam ser falsas para que OR retorne false. (false || true -> true)
*/

/*
    Operadores que são avaliados como falso
    (literal)
    -false 

    (falsy - tipos de falso)
    - 0
    - ' ' / " " / ` ` /
    - null / undefined
    - NaN

    Todo o restante é avaliado como true.
*/

//console.log('Anderson' && 'Júlia') // Vai retornar o último elemento, pois seguiu o argumento válido e conseguiu terminar no final

//console.log('Anderson' && '' && 'Júlia') //Retornou a string vazia e interrompe o código ali. Pois ele é falso.

/*
function falaOi() {
    return 'Oi'
}

let vaiExecutar // vai dar negativo

console.log(vaiExecutar && falaOi()) // Retorna falso e ou Undefined.

vaiExecutar = 'Joãozinho' // Mas a partir do momento que é atribuído qualquer valor exceto os falsy, ela se torna true e com isso o true

console.log(vaiExecutar && falaOi())  // Habilita o caminho true e a função é executada

*/

//console.log(0 || false || null || 'Anderson Assum' || true) // Anderson Assum

/*
let corUsuario = null;
let corPadrao = corUsuario || 'Azul' // Ao invés de usar toda uma estrutura condicional

console.log(corPadrao) //Neste caso vai ficar Azul, pois o usuário não setou nenhuma cor

corUsuario = 'Vermelho'
corPadrao = corUsuario || 'Azul'

console.log(corPadrao) // Já aqui vai ficar  vermelho, pois foi escolhido uma cor.
*/

