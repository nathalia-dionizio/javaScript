
//Strings 

// template string
const nome1 = prompt('digite nome')
const corFavorita1 = prompt('digite cor favorita')
console.log(`a cor favorita de ${nome1} é ${corFavorita1}`)

//concatenação
const nome2 = prompt('digite nome')
const corFavorita2 = prompt('digite cor favorita')
console.log("a cor favorita de " +nome2+ " é " +corFavorita2)



// Arrays


const racas = ["yorkshire", "pug", "bulldog", "rottweiler", "golden"]
const posicao = Number(prompt("digite um número de 0 a 5"))
console.log(racas[posicao - 1])


/*Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario! */


const nome3 = prompt('digite nome')
const email1 = prompt('digite seu email')
console.log(`O e-mail ${email1} foi cadastrado com sucesso. Seja bem vindo(a), ${nome3}!`)


/*Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima na tela o array completo

b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Exclui a segunda comida da sua lista e insira a nova informada pelo usuário. Imprima na tela a nova lista */


const comidas = ["brigadeiro", "hamburguer", "pizza", "lasanha", "massas"]
console.log(`Essa são minhas comidas preferidas: ${comidas}`)
const comidaPreferida = prompt("qual sua comida preferida?")
comidas.splice(1, 1)
console.log(`Meu array deletando hamburguer: ${comidas}`)
comidas.push(comidaPreferida)
console.log(`Meu array incluindo comida preferida: ${comidas}`)


/*Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array na tela

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array na tela */

const listaDeTarefas = []
const pergunta1 = prompt("Me informe 1 tarefas que irá realizar no dia")
const pergunta2 = prompt("Me informe 2 tarefas que irá realizar no dia")
const pergunta3 = prompt("Me informe 3 tarefas que irá realizar no dia")
listaDeTarefas.push(pergunta1)
listaDeTarefas.push(pergunta2)
listaDeTarefas.push(pergunta3)
console.log(`Minhas tarefas são: ${listaDeTarefas}`)
const incluir = Number(prompt("digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 "))
listaDeTarefas.splice(incluir, 1)
console.log(`Minha lista final: ${listaDeTarefas}`)