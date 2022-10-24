
//while
let numero = Number(prompt("insira um numero"))
let resultado = 0

while(numero !== 0) {
  resultado = resultado + numero
  numero = Number(prompt("insira um numero"))
}
console.log(resultado)

//for
let resultado2 = 0

for(let numero = Number(prompt("insira um numero")); numero !== 0; numero = Number(prompt("insira um numero"))) {
    resultado2 = resultado2 + numero
}

console.log(resultado2)

//for com array
const numeros = [5, 8, 9, 10, 14, 20, 24]

const pegaMaior = (arrayNumeros) => {
  let maiorNumero = 0
  for(let i = 0; i < arrayNumeros.length; i++) {
    if(arrayNumeros[i] > maiorNumero) {
        maiorNumero = arrayNumeros[i]
    }
  }
  return maiorNumero
}

console.log(pegaMaior(numeros))

//for off

const numeros2 = [5, 8, 9, 10, 14, 20]

const pegaMaiorNumero = (arrayNumeros) => {
  let maiorNumero = 0
  for(let arrayNumeros of numeros2) {
    if(arrayNumeros > maiorNumero) {
        maiorNumero = arrayNumeros
    }
  }
  return maiorNumero
}

console.log(pegaMaiorNumero(numeros2))


const conjuntoPalavras = ["Oi", "sumido", "tudo", "bem ?", "saudades"]

const separarPalavras = (arrayPalavras) => {
    let fraseFinal = ""
for(let arrayPalavras of conjuntoPalavras){
    fraseFinal = fraseFinal + arrayPalavras + " " 
}
   return fraseFinal
}
console.log(separarPalavras(conjuntoPalavras))


let quantBichinhos = Number(prompt("Quantos pets você tem ?"))

if (quantBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    let resultadoNomesDosBichichos = []
for(let i = 0; i < quantBichinhos; i++) {
    resultadoNomesDosBichichos.push(prompt("Digite o nome do seu pet"))
}
   console.log(resultadoNomesDosBichichos)
}


let arrayOriginal = [12, 13, 14, 15, 20, 24]

const imprimeArrayOriginal = (imprimir) => {
    imprimir = console.log("Imprime array:", arrayOriginal)
}
imprimeArrayOriginal(arrayOriginal)

const divididoPorDez = (arrayOriginal) => {
    for(let numero of arrayOriginal) {
        console.log("Números divididos por 10:", numero/10)
     }
    }
divididoPorDez(arrayOriginal)

const numerosPares = (arrayOriginal) => {
    let arrayDeNumerosPares = []
    for(let numero of arrayOriginal) {
        if (numero % 2 === 0) {
            arrayDeNumerosPares.push(numero)
        }
     }
     console.log("Números pares:", arrayDeNumerosPares)
    }
numerosPares(arrayOriginal)




    
