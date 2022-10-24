/*- **Exercícios de escrita de código**
1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo 
utilizando as funções de array **map** e **filter:**

a) Crie um novo array que contenha apenas o nome dos doguinhos

b) Crie um novo array apenas com os [cachorros salsicha]

c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */

/*
//a
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const novoArrayA = pets.map((nomeDosDoguinhos) => {
return nomeDosDoguinhos.nome 
})
console.log(novoArrayA)

//b
const novoArrayB = pets.filter((racaSalsicha) => {
    return racaSalsicha.raca === "Salsicha"
    })
    console.log(novoArrayB)
    
//c
const novoArrayC = pets.filter((racaPoodle) => {
    return racaPoodle.raca === "Poodle"
    })
    console.log(novoArrayC)

    const novoArrayD = novoArrayC.map((nomePoodle) => {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle.nome} `
        })
        console.log(novoArrayD)
*/
/* 2.Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
a) Crie um novo array que contenha apenas o nome de cada item
b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a
 const novoArrayE = produtos.map((nomeItem) => {
   return nomeItem.nome
 })
 console.log("letra A", novoArrayE)

//b
//for(var i=0; i<produtos.length; i++) {
    //  delete produtos[i].categoria;
 // }
  //console.log("letra B",novoArrayE)

//c
const novoArrayJ = produtos.filter((nomeBebidas) => {
    return nomeBebidas.categoria === "Bebidas"
  })
  console.log("letra C", novoArrayJ)

// d
const novoArrayG = produtos.filter((ypes) => {
    return ypes.nome.includes("Ypê")
  })
  console.log("letra D", novoArrayG)

//e
const novoArrayH = produtos.filter((ypes) => {
    return ypes.nome.includes("Ypê")
  })

    const novoArrayI = novoArrayH.map((novaFrase) => {
        return `letra E : Compre ${novaFrase.nome} por ${novaFrase.preco}`
        })
        console.log(novoArrayI)

