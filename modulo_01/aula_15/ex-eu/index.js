let nunu = prompt('Digite um número')
nunu = Number(nunu)

let numero = document.getElementById("texto").innerHTML = `Seu número é ${nunu}`
let raiz = document.getElementById("raiz").innerHTML = `Raiz quadrada: ${nunu ** 0.5}`
let inteiro = document.getElementById("inteiro").innerHTML = `${nunu} é inteiro? ${Number.isInteger(nunu)} `
let num = document.getElementById("NaN").innerHTML = `É NaN? ${Number.isNaN(nunu)} `
let baixo = document.getElementById("baixo").innerHTML = `Arrendado para baixo: ${Math.floor(nunu)} `
let cima = document.getElementById("cima").innerHTML = `Arredondado para cima: ${Math.ceil(nunu)}`
let casas = document.getElementById("casas").innerHTML = `Com duas casas decimais: ${nunu.toFixed(2)} `


