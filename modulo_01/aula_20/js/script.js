function meuEscopo() { //toda e qualquer característica feita em meio ao escopo de uma função é protegida por ela. Diferente de uma variável global que pode ser confundida em outras bibliotecas
    const form = document.querySelector('.form'); //querySelector faz uma query com os elementos que possuem classes CCS, ou ID, ou o que quer que seja. É útil. Eu gostei.
    //  let contador = 1
    const resultado = document.querySelector('.resultado')
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome')
        const sobre = form.querySelector('.sobre')
        const idade = form.querySelector('.idade')
        const peso = form.querySelector('.peso')
        const filme = form.querySelector('.filme')
        pessoas.push({
            nome: nome.value,
            sobre: sobre.value,
            idade: idade.value,
            peso: peso.value,
            filme: filme.value
        });
        console.log(pessoas)
        // evento.preventDefault()
        // console.log(`Form não foi enviado ${contador}`)
        // contador++
        resultado.innerHTML += `<p>Seu nome é ${nome.value} </BR>Seu sobrenome é ${sobre.value}</BR> Sua idade é ${idade.value}</BR> Seu peso é ${peso.value} </BR> E seu filme favorito é ${filme.value} </p>`
    }
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('foi enviado');
    // };
    form.addEventListener('submit', recebeEventoForm);
    form.push
}

meuEscopo();