
const amigos = ['Anderson', 'Júlia', 'Larissa', 'Davi', 'Alexsander', 'Erick', 'Gabriella']
//console.log(amigos[0]) //Neste console ele vai me trazer o índice 0 do Array, sendo o primeiro elemento, nesse caso o meu nome.
//Eu posso também alterar um elemento do array redeclarando conforme o seu índice, sem mesmo precisar mexer dentro do array. Ex: amigos[3] = 'Júlio';. A lista ficaria Anderson, Júlia, Larissa, Júlio, Erick, Gabriella.

//Método para incluir mais elementos num fim de array é utilizando o método .length ou .push
amigos[amigos.length] = 'Pedro'
amigos[amigos.length] = 'Matheus'
amigos[amigos.length] = 'Ian'
amigos[amigos.length] = 'Vinícius'
amigos[amigos.length] = 'Carlos'
amigos.push('Rayssa')
amigos.push('Kaio')
amigos.push('Menezes')

//Método para incluir um índice no começo. 
//amigos.unshift('Ária')

//Método para remover um índice do array. Retira primordiamente o último elemento, neste caso o Menezes
//amigos.pop()

//Método para remover um índice do array. Retira primordiamente o primeiro elemento, neste caso o Anderson
//amigos.shift()

//Método para deletar qualquer índice do array. O índice continuará lá, mas ficará com o valor de undefined
//delete amigos[5] 
//amigos[5] = 'Emmanuel'

//Array é indexado automáticamente sendo 0-1-2-3-4-5. Objetos são similares mas possuem algumas diferenças 








console.log(amigos)