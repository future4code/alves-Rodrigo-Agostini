/* 1) 
let a = 10
let b = 10

console.log(b) [Resposta>> 10]

b = 5
console.log(a, b) [Resposta>> 10 5]  */

//------------------

/* 2)
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) [Resposta>> 10 10 10] */

//-----------------

/* 3)
let quantiaHoras = prompt("Quantas horas você trabalha por dia?") 
let pagDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${pagDiario/quantiaHoras} por hora`) */

/*
//Exercicios
//1
let nome = prompt("Digite o nome do usuário")
let idade = prompt("Digite a idade do usuário")
console.log(typeof nome, typeof idade)
console.log("Olá", nome, ", você tem", idade, "anos")
//Aparece todos string pois não foi tipificada a variável idade como Number.//

//2------------------------

let questao1 = prompt("Você tomou banho essa semana?")
let questao2 = prompt("Você escova os dentes diariamente?")
let questao3 = prompt("Você consome frutas e/ou verduras?")

console.log("Você tomou banho essa semana? -", questao1)
console.log("Você escova os dentes diariamente? -", questao2)
console.log("Você consome frutas e/ou verduras? -", questao3)
*/
//3-------------------------

let a = 10
let b = 25
let auxiliar
// Aqui faremos uma lógica para trocar os valores
auxiliar = b
b = a
a = auxiliar

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10