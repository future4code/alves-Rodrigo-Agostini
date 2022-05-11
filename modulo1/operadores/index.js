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
/*1)
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) >> a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) >> b. true

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) >> c. false

console.log("d. ", typeof resultado) >> d. boolean 

// 2)

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) >> será impressa uma junção de string, dois números juntos

// 3)

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)



// -Exercícios

// 1)

idade =  prompt("Qual a sua idade?")
idadeAmigo = prompt("Qual a idade do seu melhor amigo/a?")
condicao = idade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", condicao)
console.log(idade - idadeAmigo)


// 2)

numeroPar =  prompt("Insira um numero par:")
console.log(numeroPar % 2 )
//ao escrever numero par a saida sempre resulta em 0
//ao escrever um impar a saida sempre resulta em 1


// 3)

minhaIdade =  prompt("Insira a sua idade:")
console.log(minhaIdade*12, "meses de vida")
console.log(minhaIdade*12*365, "~ dias de vida")
console.log(minhaIdade*12*365*24, "~ horas de vida")
*/

// 4)

numberOne =  prompt("Insira um numero:")
numberTwo =  prompt("Insira um numero:")
//O primeiro numero é maior que segundo? true
auxiliar = numberOne > numberTwo
console.log(numberOne, "eh maior que", numberTwo, "? -", auxiliar)
//O primeiro numero é igual ao segundo? false
auxiliar = numberTwo == numberOne
console.log(numberOne, "eh igual a", numberTwo, "? -", auxiliar)
//O primeiro numero é divisível pelo segundo? true
auxiliar = numberOne % numberTwo == 0
console.log(numberOne, "eh divisivel por", numberTwo,"? -", auxiliar)
//O segundo numero é divisível pelo primeiro? true
auxiliar = numberTwo % numberOne == 0
console.log(numberTwo, "eh divisivel por", numberOne, "? -", auxiliar)
