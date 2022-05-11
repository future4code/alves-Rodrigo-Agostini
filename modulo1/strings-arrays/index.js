/* // 1)
let array
console.log('a. ', array) // nada

array = null
console.log('b. ', array)  // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  // c. 11

let i = 0
console.log('d. ', array[i])  // d. 3

array[i+1] = 19
console.log('e. ', array) // e.[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)  // f. 9
*/

/* //2)

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

//Exercícios ---------------------------

/* //1)

const nome = prompt("Insira seu nome")
const email = prompt("Insira seu email")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)
*/

/* // 2)

const comidas = ["abobora", "feijao", "ervilha", "pizza", "empada"]
console.log(comidas)
console.log("Essas são as minhas comidas preferidas:") 
console.log(comidas[0]+'\n'+ comidas[1]+'\n'+ comidas[2]+'\n'+ comidas[3]+'\n'+ comidas[4])
const novaComida = prompt("Qual a sua comida favorita?")
comidas[1] = novaComida
console.log(comidas)
*/

// 3)

const listaDeTarefas = [] 
listaDeTarefas[0] = prompt("Insira sua primeira tarefa")
listaDeTarefas[1] = prompt("Insira sua segunda tarefa")
listaDeTarefas[2] = prompt("Insira sua terceira tarefa")
console.log(listaDeTarefas)


const excluido = prompt('Qual tarefa deseja excluir? 0 para 1ª / 1 para 2ª e 2 para 3ª')

listaDeTarefas.splice(excluido,1)

console.log(listaDeTarefas)