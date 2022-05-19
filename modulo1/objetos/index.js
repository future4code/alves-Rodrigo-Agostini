/*
// 1)
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish
console.log(filme.transmissoesHoje[1]) // {canal: "Globo", horario: "14h"}

// 2)

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro,nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // nome: "Juca", idade: 3, raca: "SRD"  
console.log(gato)// nome: "Juba", idade: 3, raca: "SRD"  
console.log(tartaruga)// nome: "Jubo", idade: 3, raca: "SRD"  


//3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //a)false - b) Pois o atributo backender gera um booleano
console.log(minhaFuncao(pessoa, "altura")) //a) null/Undefined - b) Por que a variável está sem valor 
//ou nao foi declarada.



//Exercícios
// 1)

// Exemplo de entrada
const pessoa = {
    nome: "Abelardo", 
    apelidos: ["Abel", "Be", "Belo"]
 }
 function imprime(pessoa){
 return (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)   
 }

 console.log(imprime(pessoa))

 
const novaPessoa = {
    ...pessoa,
    apelidos: ["Bebeu", "Beu", "Ládio"]            
}

console.log(imprime(novaPessoa))


// o parametro serve para chamar o que for colocado dentro dos parênteses da função
modificarPessoa(pessoa)
modificarPessoa(filme) 

//2

const cidadaoMedieval = {
    nome: "Lazarus", 
    idade: 37, 
	profissao: "Alfaiate"
}

const cidadaoModerno = { 
    nome: "Enzo", 
    idade: 19, 
	profissao: "Influencer"
}

function detalhaString(pessoa){
    const vetorDados=[] 
    vetorDados.push(pessoa.nome)
    vetorDados.push(pessoa.nome.length)
    vetorDados.push(pessoa.idade)
    vetorDados.push(pessoa.profissao)
    vetorDados.push(pessoa.profissao.length)
    return vetorDados
}

console.log(detalhaString(cidadaoMedieval))
console.log(detalhaString(cidadaoModerno))
*/

// 3

const carrinho = [] 

const frutaPrim = {
    nome: "Maçã",
    disponivel: true
}

const frutaSeg = {
    nome: "Uva",
    disponivel: true
}

const frutaTerc = {
    nome: "Manga",
     disponivel: true
}

function compra(fruta){
carrinho.push([fruta.nome, fruta.disponivel])
return carrinho
}

compra(frutaPrim)
compra(frutaSeg)
compra(frutaTerc)
console.log(carrinho)
