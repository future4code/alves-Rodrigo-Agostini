/* // 1)
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
// { nome: "Amanda Rangel", apelido: "Mandi"} 0   { nome: "Amanda Rangel", apelido: "Mandi" }
 //                                            |   { nome: "Laís Petra", apelido: "Laura" }
 //         O ELEMENTO                      ÍNDICE { nome: "Letícia Chijo", apelido: "Chijo" }
//  irá fazer o mesmo para o 2° e 3° elemento             |O PROPRIO ARRAY DE OBJETOS|
// { nome: "Laís Petra", apelido: "Laura" }   1      "  ------ array identico ao de cima----- "
//{ nome: "Letícia Chijo", apelido: "Chijo" } 2      " --------- array novamente ---------   "

//2)
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
// { "Amanda Rangel", "Laís Petra", "Letícia Chijo" }


//3
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  //{ nome: "Amanda Rangel", apelido: "Mandi" }
  //{ nome: "Laís Petra", apelido: "Laura" }

// Exercicios -------------------

// 1)

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const filterPet = pets.map((pets) => {
    return pets.nome
})

console.log(filterPet)

const filterSalsicha = pets.filter((pets) => {
    return pets.raca == "Salsicha"})

console.log(filterSalsicha)

const filterPoodle = pets.filter((pets) => {
    return pets.raca == "Poodle"})
    .map((pets) => {
        return `Você ganhou um cupom de desconto de 10% para tosar ${pets.nome}!`
    })
    
console.log(filterPoodle)


//2)

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

// a) Crie um novo array que contenha apenas o nome de cada item

const filterName = produtos.map((produtos) => {
    return produtos.nome
})

console.log(filterName)


//b) Crie um novo array que contenha um objeto com o nome e o preço 
//de cada item, aplicando 5% de desconto em todos eles
const filterProduto = produtos.map((produtos) => {
    const precoPorcento = produtos.preco - (produtos.preco * 0.05)
    const produtoObjeto = {
        nome: produtos.nome,
        preco: precoPorcento
    }

    return produtoObjeto
})

console.log(filterProduto)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const filterBebida = produtos.filter((produtos) => {
    return produtos.categoria == "Bebidas"
})
console.log(filterBebida)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha
// a palavra "Ypê"

const filterYpe = produtos.filter((produtos) => {
    return produtos.nome.includes("Ypê")
})
console.log(filterYpe)


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const filterY = produtos.filter((produtos) => {
    return produtos.nome.includes("Ypê")
})

    .map((produtos) => {
        return `Compre ${produtos.nome} por R$ ${produtos.preco}`
    })

console.log(filterY)


*/
// desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a) novo array nome pokémons ordem alfabética

const novoPoke = pokemons.map((pokemons) => {
return pokemons.nome
})

console.log(novoPoke.sort())

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

const novoTipo = pokemons.map((pokemons) => {
    return pokemons.tipo
    })

const tipoStore = [...new Set(novoTipo)]

console.log(tipoStore)
    
    

