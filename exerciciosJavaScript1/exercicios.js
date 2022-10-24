// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) * Number(num2))
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt('Digite o ano atual')
  const anoNasceu = prompt('Digite o ano que nasceu')

  console.log(Number(anoAtual) - Number(anoNasceu))
}

// Exercício 3
function calculaIMC() {
  const pesoAtual = prompt('Digite seu peso')
  const alturaAtual = prompt('Digite sua altura')
  console.log(pesoAtual / (alturaAtual * alturaAtual));
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("qual seu nome?")
  const idade = prompt("qual sua idade?")
  const email = prompt("qual seu email?")
  console.log("Meu nome é", nome, "tenho", idade, "anos", "e o meu email é", email)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("uma cor")
  const cor2 = prompt("uma cor")
  const cor3 = prompt("uma cor")
  console.log([cor1, cor2, cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const string = prompt("escreve uma palavra em minusculo")
  console.log(string.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = Number(prompt("Valor do custo do espetaculo"))
  const valorcadaIngresso = Number(prompt("Valor de cada ingresso"))
  console.log(custoEspetaculo / valorcadaIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const tam1 = prompt("escreva uma palavra")
  const tam2 = prompt("escreva uma palavra")
  console.log(tam1.length === tam2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const igual1= prompt("escreva uma palavra")
  const igual2 = prompt("escreva uma palavra")
  console.log(igual1.toUpperCase() === igual2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const esteAno = prompt("Qual o ano atual?")
  const anoDeNascimento = prompt("Qual o ano de nascimento?")
  const anoEmissaoRg = prompt("Qual o ano de emissão do RG?")
  console.log(esteAno)
  console.log(anoDeNascimento)
  console.log(anoEmissaoRg)
  console.log(esteAno - anoEmissaoRg == 5 && esteAno - anoDeNascimento <= 20 && esteAno - anoEmissaoRg == 10 && esteAno - anoDeNascimento >=21 && esteAno - anoDeNascimento >=51   )
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const quantosAnos = prompt("Você tem mais de 18 anos? responda com sim ou não")
  const ensinoMedio = prompt("Você possui ensino médio completo? responda com sim ou não")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? responda com sim ou não")
  console.log(quantosAnos ===  ensinoMedio === disponibilidade)

}