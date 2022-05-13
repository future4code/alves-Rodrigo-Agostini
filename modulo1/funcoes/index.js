/*1)
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) //a) 10 
console.log(minhaFuncao(10)) //a) 50
// b) Nada


//2)

a)ela inicia pedindo que usuario insira um texto e o guarda na variavel textoDoUsuario.
Depois armazena dentro da variavel outraFuncao uma função.
    Esta função pede uma string, que no caso se chama texto.
        A função resulta num retorno que pega uma variavel chamada texto, reduz para 
        letras pequenas e analisa se contem a exata ordem do conjunto de caracteres
        'cenoura'em algum momento da string informada pelo usuario.  

b)  i. Eu gosto de cenoura // true
    ii. CENOURA é bom pra vista // true 
    iii. Cenouras crescem na terra // true */

//Exercicios Escrita

// 1)
//a)
// function nomeUsuario (nome) {
// 	return nome
// }
// function idadeUsuario (idade) {
// 	return idade
// }
// function cidadeUsuario (cidade) {
//     return cidade
// }
// function ocupacaoUsuario (ocupacao) {
//     return ocupacao
// }

//console.log(`Eu sou ${nomeUsuario ("Rodrigo")}, tenho ${idadeUsuario (Number(32))} anos, moro em ${cidadeUsuario ("Blumenau")} e sou ${ocupacaoUsuario("estudante")}.`) 

// 1.b)
/*
const nomeDigitado = prompt("Informe o nome:")
const idadeDigitada = prompt("Informe a idade:")
const cidadeDigitada = prompt("Informe a cidade:")
const ocupacaoDigitada = prompt("Informe a ocupação:")

function nomeUsuario () {
    return nomeDigitado
}
function idadeUsuario () {
    return idadeDigitada
}
function cidadeUsuario () {   
    return cidadeDigitada
}
function ocupacaoUsuario () {  
    return ocupacaoDigitada
}

console.log(`Eu sou ${nomeUsuario()}, tenho ${Number(idadeUsuario())} anos, moro em ${cidadeUsuario()} e sou ${ocupacaoUsuario()}.`) 


//2.a)
const valorUm = prompt("Informe um valor")
const valorDois = prompt("Informe a idade:")

function somar(x, y) {
    return Number(x)+ Number(y)
}

console.log(`Resultado é: ${somar(valorUm, valorDois)}`)


//2.b)
const valorUm = prompt("Informe um valor")
const valorDois = prompt("Informe outro valor:")

function comparar(x, y) {
    return Number(x)>= Number(y)
}

console.log(comparar(valorUm, valorDois))


//2.c)

const valorUm = prompt("Informe um valor")

function condicaoPar(x) {
    return x % 2 == 0
}

console.log(condicaoPar(valorUm))


//2.d)

const fraseDig = prompt("Digite a frase")

function frase (valor) {
    return valor
}
console.log(frase(fraseDig).length)
console.log(frase(fraseDig).toUpperCase())
*/

//3)
const valorUm = prompt("Informe um valor")
const valorDois = prompt("Informe outro valor")

function somaV (w, k) {
    return Number(w) + Number(k)
}
function subtraiV (w, k) {
    return Number(w) - Number(k)
}
function multiplicaV (w, k) {
    return Number(w) * Number(k)
}
function divideV (w, k) {
    return Number(w) / Number(k)
}

console.log(`Números inseridos: ${valorUm} e ${valorDois}`)
console.log(`Soma: ${somaV(valorUm, valorDois)}`)
console.log(`Diferença: ${subtraiV(valorUm, valorDois)}`)
console.log(`Multiplicação: ${multiplicaV(valorUm, valorDois)}`)
console.log(`Divisão: ${divideV(valorUm, valorDois)}`)
