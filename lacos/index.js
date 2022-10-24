/*
let numeroUsuario = Number(prompt("Digite um número"))
let resultado  = 0

while (numeroUsuario !== 0) {
    resultado = resultado + numeroUsuario
    numeroUsuario = Number(prompt("Digite um número"))
}
console.log("Resultado", resultado)

const palavras= ["Oi", "sumido", "tudo bem?", "saudades!"]
 let fraseFinal =  ""

 for(let palavra of palavras ) {
    fraseFinal = fraseFinal + palavra + " "
 }
 console.log(fraseFinal)
 */

 /*- **Exercícios de escrita de código**
    1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
        
        a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
        
        b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
        
        - 💡 Dica
            
            <aside>
            ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
            
            </aside>
            
        
        c) Por fim, imprima o array com os nomes dos bichinhos no console*/

/*
let bichinhosPergunta = Number(prompt("Quantos bichinhos de estimação você tem ?"))

if (bichinhosPergunta === 0) {
 console.log("Que pena! Você pode adotar um pet!")
} else {
 let arrayBichinhos = []
 for(let i = 0; i < bichinhosPergunta; i++){
    arrayBichinhos.push(prompt("Digite o nome do seu pet"))
 }
 console.log(arrayBichinhos)
}
*/

/*2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    
    - 💡 Dica
        
        Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.*/



//a
const arrayFuncao = (arrayOriginal) => {
for(let numero of arrayOriginal ) {
    console.log("Imprimir valores", numero)
 }
}
arrayFuncao(arrayOriginal)

//b
const arrayFuncao2 = (arrayOriginal) => {
    for(let numero of arrayOriginal) {
        console.log("Números divididos por 10:", numero/10)
     }
    }
arrayFuncao2(arrayOriginal)

//c
const arrayFuncao3 = (arrayOriginal) => {
    let numerosPares = []
    for(let numero of arrayOriginal) {
     if (numero % 2 === 0) {
        numerosPares.push(numero)
     }
     }
     console.log("Números pares:", numerosPares)
    }
   arrayFuncao3(arrayOriginal)


//d
function imprimirArrayDeStrings (arrayOriginal){
   let arrayDeStrings = []
   let i = 0
   for(let valor of arrayOriginal){
   arrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`)
   i++
   }
   console.log(arrayDeStrings)
   }
   imprimirArrayDeStrings (arrayOriginal)
    
//e Escreva um programa que imprima no console o maior e o menor números contidos no array original

    const arrayOriginal = [10, 14, 28, 30, 41, 51, 71]

    const pegarMaiorOuMenorNumero = (arrayOriginal) => {
    let maiorNumero = 0;                                   
    let menorNumero = Infinity;                           

    for(let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] < menorNumero){
    menorNumero = arrayOriginal[i]
    }else if(arrayOriginal[i] > maiorNumero){
    maiorNumero = arrayOriginal[i]
    }
    }
    console.log("O maior numero é:", maiorNumero)
    console.log("O menor numero é:", menorNumero)
    }
    pegarMaiorOuMenorNumero (arrayOriginal)