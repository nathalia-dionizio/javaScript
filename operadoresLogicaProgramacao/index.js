/* Faça um programa que:
a) Pergunte a idade do usuário
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
d) Imprima na console a diferença de idade (não tem problema se sair um número negativo) */


const suaIdade = Number(prompt("Qual sua idade?"))
const idadeDoAmigo = Number(prompt("Qual a idade de seu melhor amigo(a)?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeDoAmigo)
console.log("Diferença de idade:", suaIdade - idadeDoAmigo)


/* Faça um programa que:
a) Peça ao usuário que insira um número par
b) Imprima na console o resto da divisão desse número por 2.
*/


const numeroPar = Number(prompt("Digite um número par"))
console.log("resto da divisão:", numeroPar % 2)



/*Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
a) A idade do usuário em meses
b) A idade do usuário em dias
c) A idade do usuário em horas
*/


const userIdade = Number(prompt("Qual sua idade?"))

console.log("idade do usuário em meses", userIdade * 12)
console.log("idade do usuário em dias", userIdade * 365)
console.log("idade do usuário em horas", userIdade * 365 * 24)


/*Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:
O primeiro numero é maior que segundo? 
O primeiro numero é igual ao segundo? 
O primeiro numero é divisível pelo segundo? 
O segundo numero é divisível pelo primeiro? 
*/


const a = Number(prompt("Fale um número"))
const b = Number(prompt("Fale mais um número"))
console.log("O primeiro numero é maior que segundo?", a > b) 
console.log("O primeiro numero é igual ao segundo?", a == b) 
console.log("O primeiro numero é divisível pelo segundo?", a % b == 0) 
console.log("O segundo numero é divisível pelo primeiro?", b % a == 0) 


