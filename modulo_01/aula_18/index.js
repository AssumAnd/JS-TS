//Ao invés de utilizar variáveis relacionadas mas visando um único grupo o ideal seria a criação de um objeto que contenham os atributos

// const nome01 = 'Anderson'
// const sobrenome01 = 'Assum'
// const idade = 21

const pessoa1 = {
    nome: 'Anderson',
    sobrenome: 'Assum',
    idade: 21
};

//console.log(pessoa1.nome) R - Anderson


// const nome02 = 'Júlia'
// const sobrenome02 = 'Silva'
// const idade02 = 21

const pessoa2 = {
    nome: 'Júlia',
    sobrenome: 'Evelyn',
    idade: 21
}

//console.log(pessoa2.idade) //21





//Para facilitar ainda mais a criação de nomes, podemos criar uma função que faz isso automáticamente, aletrando apenas os argumentos enquanto a função fica intacta

function criaPessoa(nome, sobrenome, idade) { //Dentro dos parênteses aqui são chamados de parâmetros
    //funcão chamada de factory pois cria objetos
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa3 = criaPessoa('Anderson', 'Assum', 21) // E neste caso eu atribuo o valor para o parâmetro. Chama-se argumento
const pessoa4 = criaPessoa('Júlia', 'Evelyn', 21)
const pessoa5 = criaPessoa('Alice', 'Assum', 17)
const pessoa6 = criaPessoa('Jéssica', 'Emily', 14)
const pessoa7 = criaPessoa('Marcilene', 'Assum', 41)
/*
console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa5)
console.log(pessoa6)
console.log(pessoa7)
*/

//----------------------------------------------------------------------------

const jogo1 = {
    nome: 'Devil May Cry',
    genero: 'ação',
    lancamento: 2019,
    diretor: 'Hideaki Itsuno',
    idade: 5,

    // fala() {
    //     console.log(`${jogo1.nome} é um jogo lançado em ${jogo1.lancamento} pelo diretor ${jogo1.diretor}`)
    // }
    //Outro jeito de criar esse código seria com o método this, que referencia o objeto neste contexto
    fala() {
        console.log(`${this.nome} é um jogo de ${this.genero} lançado em ${this.lancamento} pelo diretor ${this.diretor}. Já se passara ${this.idade} desde o seu lançamento`)
    },

    incrementaIdade() { //Esta função é responsável por alterar a idade do jogo, acrescentando mais 1.
        this.idade++
    }

}

jogo1.fala()
jogo1.incrementaIdade()
jogo1.fala()
jogo1.incrementaIdade()
jogo1.fala()
jogo1.incrementaIdade()
jogo1.fala()
jogo1.incrementaIdade()
jogo1.fala()
jogo1.incrementaIdade()
jogo1.fala()
