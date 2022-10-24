
const pessoaL = {
    nome: "Let",
    idade: 18,
    musica: "rock"
}
console.log(`O nome da pessoa é ${pessoaL.nome}, ela tem ${pessoaL.idade} anos e gosta muito de ${pessoaL.musica}`)

const novaLista = {
    ...pessoa,
    comida: ["brigadeiro", "pizza", "hamburguer"],
    nomeAmigo: "Bruno",
    idadeAmigo: 27
}

console.log(`O nome da pessoa é ${pessoa.nome}, e suas comidas preferidas são: ${novaLista.comida} tem ${pessoa.idade} anos e gosta muito de ${pessoa.musica} seu melhor amigo se chama ${novaLista.nomeAmigo} e tem ${novaLista.idadeAmigo} anos.`)

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))


/*1. Resolva os passos a seguir: 
    
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**/

// Exemplo de entrada


const pessoa2 = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
console.log(`"Eu sou ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos[0]}, ${pessoa2.apelidos[1]} ou ${pessoa2.apelidos[2]}"`)

const novaPessoa2 = {
    ...pessoa2,
    apelidos: ["g", "k", "L"]
}
console.log(`"Eu sou ${pessoa2.nome}, mas pode me chamar de: ${novaPessoa2.apelidos[0]}, ${novaPessoa2.apelidos[1]} ou ${novaPessoa2.apelidos[2]}"`)


/*2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    - Exemplo

  const informacoes1 = {
    nome: "Luis",
    idade: 45,
    profissao: "Médico"
}

const informacoes2 = {
    nome:"Edgar",
    idade: 24,
    profissao: "Dentista"
}

const trazerInformacoes = (informacoes1, informacoes2) => {
    const nomes = informacoes1 + informacoes2
    return nomes
}
console.log('Nomes:', [informacoes1.nome, informacoes2.nome])
console.log('Número de caracteres de cada nome respectivamente:', [informacoes1.nome.length, informacoes2.nome.length])
console.log('Idades:', [informacoes1.idade, informacoes2.idade])
console.log('Profissões:', [informacoes1.profissao, informacoes2.profissao])
console.log('Número de caracteres de cada profissão respectivamente:', [informacoes1.profissao.length, informacoes2.profissao.length])*/


const informacoes1 = {
    nome: "Luis",
    idade: 45,
    profissao: "Médico"
}

const informacoes2 = {
    nome:"Edgar",
    idade: 24,
    profissao: "Dentista"
}

const trazerInformacoes = (dosObjetos) => {
    return [dosObjetos.nome , dosObjetos.nome.length, dosObjetos.idade, dosObjetos.profissao, dosObjetos.profissao.length]
}
console.log(trazerInformacoes(informacoes1, informacoes2))


/*3. Resolva os passos a seguir:    
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`   
b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)   
c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.
d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.*/

const carrinho = []

const laranjas = {
    nome: "laranja",
    disponibilidade: true,
}

const bananas = {
    nome: "banana",
    disponibilidade: true,
}

const mexericas = {
    nome: "mexerica",
    disponibilidade: true,
}

const frutas = (fruta) => {
    carrinho.push(fruta)
}

frutas(laranjas)
frutas(bananas)
frutas(mexericas)

console.log(carrinho)

