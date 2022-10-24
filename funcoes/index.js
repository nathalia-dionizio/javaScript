
function criarLista(array) {
    const primeiroElemento = array[0] / 2
    const ultimoElemento = array[array.length - 1] / 2        // [array.length - 1] descobrir ultimo elemento de array
    const novoArray = [ultimoElemento, primeiroElemento]
    return novoArray
}

const a =  [ 8, 4, 6, 10 ]
const resultado1 = criarLista(a)
console.log (resultado1)


const criarLista2 = (array) => {
    const primeiroElemento = array[0] / 2
    const ultimoElemento = array[array.length - 1] / 2        
    const novoArray = [ultimoElemento, primeiroElemento]
    return novoArray
}
const b =  [ 8, 4, 6, 10 ]
const resultado = criarLista2(b)
console.log (resultado) 


/* 1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ```
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem. */

  
const informaçõesSobreMim = () => {
    console.log(`Eu sou Nathalia, tenho 26 anos, moro em BH e sou estudante`)
   
}
informaçõesSobreMim()


/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]. */


const informaçõesUsuario = () => {
    const nome = prompt("Qual seu nome?")
    const idade = Number(prompt("Qual sua idade?"))
    const endereco = prompt("Qual seu endereço?")
    const profissao = prompt("Qual sua profissão?")
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
}
informaçõesUsuario()


/*2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.*/



//a)
const recebeNumeros = () => {
    const numeroUm = 8
    const numerodois = 7
    const resultado = numeroUm + numerodois
    console.log(resultado) 
}    
recebeNumeros()

//b
const numerosMaior = () => {
    const numeroUm = 8
    const numerodois = 7
    const resultado = numeroUm >= numerodois
    console.log(resultado) 
}    
numerosMaior()

//c
const numeroPar = () => {
    const numero = 8
    const resultado = numero % 2 === 0
    console.log(resultado) 
}    
numerosMaior()





//d

const retornaTamanhoTexto = (texto) => {
    return `${texto.length}, ${texto.toUpperCase()}`
}

console.log(retornaTamanhoTexto("ola sou o batman"))

/*3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, 
peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10 */



const number1 = Number(prompt("Digite um número"))
const number2 = Number(prompt("Digite um número"))
const number3 = Number(prompt("Digite um número")) // exemplo passando parametros, utilizei somente no somar.
const number4 = Number(prompt("Digite um número")) // exemplo passando parametros, utilizei somente no somar.

const somar = (number3, number4) => {
const soma = number3 + number4
return soma
}

const subtrair = () => {
const subtrai = number1 - number2
return subtrai
}

const multiplicar = () => {
const multiplica = number1 * number2
return multiplica
}

const divisao = () => {
const dividir = number1 / number2
return dividir
}



console.log('Soma:', somar(number3, number4))
console.log('Diferença:', subtrair())
console.log('Multiplicação',multiplicar())
console.log('Divisão:',divisao())

