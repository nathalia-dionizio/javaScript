
const falaNumero1 = Number(prompt("Fale um número"))
const falaNumero2 = Number(prompt("Fale um segundo número"))

const compararNumeros = (num1, num2) => {
    if (num1 > num2) {
        return `Número ${num1} é maior que número ${num2}`
    } else if (num1 < num2) {
        return `Número ${num1} é menor que número ${num2}`
    } else {
        return `Número ${num1} é igual a número ${num2}`
    }
}

console.log(compararNumeros(falaNumero1, falaNumero2))


/*1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`*/


const maiorDeIdade = Number(prompt("Qual a sua idade?"))
const verificarSePodeDirigir = (deMaior) => {
 if (deMaior >= 18) {
    console.log("Pode dirigir!")
 } else {
    console.log("Não pode dirigir!")
 }
}

verificarSePodeDirigir(maiorDeIdade)


/*Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else*/


const turno = prompt("Qual horario estudo? coloque M se for matutino ou V para Vespertino ou N para Noturno")

const verificarTurno = (horario) => {
    if (horario == "M") {
     console.log("Bom Dia!")
    } else if (horario == "V") {
     console.log("Boa Tarde!")
    } else {
     console.log("Boa Noite!")
    }
}

verificarTurno(turno)


/*Repita o exercício anterior, mas utilizando a estrutura de switch case agora.*/


const qualTurno = prompt("Qual horario estudo? coloque M se for matutino ou V para Vespertino ou N para Noturno")

switch (qualTurno) {
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    case 'N':
        console.log("Boa Noite!")
        break
    default:
        console.log("Gentileza inserir umas das opções: M se for matutino ou V para Vespertino ou N para Noturno")
}


/*Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário 
qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("*/

const generoFilme = prompt("Qual o genero do filme?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

const verificarSeVaiAssistir = () => {
    if (generoFilme === "fantasia" &&  valorIngresso < 15) {
    console.log ("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
}

verificarSeVaiAssistir(generoFilme, valorIngresso)
 






