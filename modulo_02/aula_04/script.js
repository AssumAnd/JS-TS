//const hora = Date()
/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/


//If pode ser usado sozinho
//Else e else if não podem ser usadas sozinhas. Sempre que for utilizada precisa de um if antes.
//Posso ter vários else ifs na checagem
//Só posso ter apenas um último else 
//Condições podem ser feitas sem else if


const hora = 44

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 17) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Hora não encontrada.')
}



const tenhoGrana = true
if (tenhoGrana){
    console.log('Vou sair de casa.')
} else {
    console.log('Não vou sair de casa.')
}