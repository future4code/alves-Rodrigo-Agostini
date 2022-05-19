/*
// 1)
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
//esta somando a variavel i(de 0 ate 4) 
//dentro da variavel valor(i+i). 10

// 2)
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
        console.log(numero)
    }
    //console.log(numero)
}
//todos os numeros superiores a 18 contidos no array lista
 for (let i = 0; i < lista.length; i++){
     console.log(lista.indexOf(lista[i]))
 }

// 3)

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}
//1°* >>2° ** >>3° *** >>4° ****


//Exercicios --------------

// 1) 

const quantos = Number(prompt("Quantos pets voce tem?"))
nome = []
if (quantos > 0) {
    let contador = 0
    while (contador < quantos) {
        const nomeInforma = prompt(`Qual o nome do seu pet?`)
        for (let ind = 0; ind < quantos; ind++) {
            nome[ind] = nomeInforma
        }
        contador++

        for (let ind = 0; ind < quantos; ind++) {
            console.log(nome[ind])
        }
    }
} else {
    console.log("Que pena! Você poderia adotar um pet :3")
}

// 2)

const lista = [150, 10, 120, 80, 45, 110, 210, 23]
for (let ind = 0; ind < lista.length; ind++) {
    console.log(lista[ind])
}

for (let ind = 0; ind < lista.length; ind++) {
    console.log(lista[ind] / 10)
}

for (let ind = 0; ind < lista.length; ind++) {
    if (lista[ind] % 2 == 0) {
        console.log(lista[ind])
    }
}

for (let ind = 0; ind < lista.length; ind++) {
    console.log(`O elemento da index ${ind} eh ${lista[ind]}`)
}

const getMaior = (array) => {
    let maiorNum = 0
    for (let ind = 0; ind < array.length; ind++) {
        if (array[ind] > maiorNum) {
            maiorNum = array[ind]
        }
    }
    return maiorNum
}

const getMenor = (array) => {
    let menorNum = Infinity
    for (let ind = 0; ind < array.length; ind++) {
        if (array[ind] < menorNum) {
            menorNum = array[ind]
        }
    }
    return menorNum
}

console.log(`O maior número é ${getMaior(lista)} e o menor é ${getMenor(lista)}`)

*/

//1.desafio
/*
const numeroInfo = Number(prompt("Informe um numero?"))
console.log("Vamos jogar")

let adivinhado = prompt("Digite o numero para adivinhar:")

for (let indexTent = 0; indexTent < 7; indexTent++) {

    if (adivinhado == numeroInfo)
        console.log("Voce acertou")
    else if (adivinhado < numeroInfo) {
        console.log("Errou, numero eh maior")
        
    } else if (numeroInfo > adivinhado) {
        console.log("Errou, numero eh menor")
        
 
    }
}

//
let numeroRand = Math.round(Math.random() * 10)
console.log(numeroRand)/*

*/