// 1 . Construa um programa, seguindo os seguintes passos:

//a) Declare uma variável para armazenar um nome, idade, Pergunte ao usuário seu nome e sua idade, 

//atribuindo esses dois valores às variáveis que acabou de criar.

const nome = prompt('Qual o seu nome?')
const idade = Number(prompt('Qual o sua idade?'))
console.log(typeof nome)
console.log(typeof idade)


//b) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

console.log("Olá", nome, "você tem", idade, "anos")


// 2.Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
//Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

//a) Crie três novas variáveis, contendo as respostas



let cachorro = prompt('Você gosta de cachorro? sim ou não?')
let gato = prompt('Você gosta de gato? sim ou não?')
let hamburguer = prompt('Você gosta de hamburguer? sim ou não?')

console.log(cachorro)
console.log(gato)
console.log(hamburguer)

let respostaUm = cachorro
let respostaDois = gato
let respostaTres = hamburguer

//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.
console.log("você gosta de cachorro?", respostaUm, "Você gosta de gato?", respostaDois, "Você gosta de hamburguer", respostaTres)



// 3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial
// Agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a



let a = prompt('Fale um número de 1 a 10')
let b = prompt('Fale um número de 11 a 20')
console.log("Valor de a", a)
console.log("Valor de b", b)

let novoA = b
let novoB = a

console.log("O novo valor de a é", novoA)
console.log("O novo valor de b é", novoB)



//DESAFIOS

//Faça um programa que receba dois números do usuário e faça as seguintes operações, 
//imprimindo os resultados no console da seguinte forma:
//1. O primeiro número somado ao segundo número resulta em: x.
//2. O primeiro número multiplicado pelo segundo número resulta em: y.

let x = Number(prompt('Fale um número de 1 a 10'))
let y = Number(prompt('Fale um número de 11 a 20'))

console.log("O primeiro número somado ao segundo número resulta em:", (x + y))
console.log("O primeiro número multiplicado pelo segundo número resulta em:", (x * y))