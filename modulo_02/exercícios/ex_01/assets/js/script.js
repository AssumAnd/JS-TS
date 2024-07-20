//Capturar evento de submit do formulario

const form = document.querySelector('#formulario')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')


  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso) {
    setResultado('Peso inválido', false)
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false)
    return;
  }

  const imc = getImc(peso, altura)
  const nivelImc = getNivelImc(imc)


  const msg = `Seu IMC é ${imc} (${nivelImc})`

  setResultado(msg, true)

  /* 
  
  Menos do que 18,5
  
  Entre 18,5 e 24,9
  
  Entre 25 e 29,9
  
  Entre 30 e 34,9
  
  Entre 35 e 39,9
  
  Mais do que 40
  
  Resultado
  Abaixo do peso
  
  Peso normal
  
  Sobrepeso
  
  Obesidade grau 1
  
  Obesidade grau 2
  
  Obesidade grau 3
  
  
  
  
  
  
  
  
  
  
  
  */
  //console.log('Evento previnido')
  //setResultado('Olá mundo') // parâmetro
})

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 2']

  if (imc >= 39.9) { return nivel[5] }

  if (imc >= 34.9) { return nivel[4] }

  if (imc >= 29.9) { return nivel[3] }

  if (imc >= 24.9) { return nivel[2] }

  if (imc >= 18.5) { return nivel[1] }

  if (imc >= 18.5) { return nivel[0] }
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2)
}

function criaP() {
  const p = document.createElement('p');
  //p.classList.add('paragrafo-resultado')
  // p.innerHTML = 'Qualquer coisa';
  return p
}

function setResultado(msg, isValid) { // parâmetro
  const resultado = document.querySelector('#resultado')
  // resultado.innerHTML = `<p>${msg}</p>`
  resultado.innerHTML = '';



  const p = criaP()

  if (isValid){
    p.classList.add('paragrafo-resultado')
  } else{
    p.classList.add('paragrafo-negativo')
  }

  p.innerHTML = msg
  resultado.appendChild(p)
  // resultado.appendChild(p);
}
























// function calculo() {
//   const form = document.querySelector('.form')
//   let texto = document.getElementById('respost');

//   const result = []

//   function dadosFormulario() {

//     console.log('oiw')
//     const peso = form.querySelector('.peso')
//     const altura = form.querySelector('.altura')
//     result.push({
//       peso: peso.value,
//       altura: altura.value
//     });

//     console.log(result)
//     // texto.innerHTML += `<p>Seu nome é ${peso.value} </BR>Seu sobrenome é ${altura.value}`

//   }

//   form.addEventListener('submit', dadosFormulario);
//   form.push
// }

