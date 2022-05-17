/* 1)
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a) Ele pega o numero informado pelo usuario e divide por 2.
Se o resto da divisao for 0, entra na condicao if e o console imprime ''passou no teste''.
Senao entra na 2a condicao else e imprime no console "nao passou no teste".

b)numeros pares, pois é uma propriedade matematica dos numeros pares o resto 0 numa divisao por 2. 

c) numeros ímpares


// 2)

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   // break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Serve para apresentar ao usuario o valor de cada item,
como um scanner de mercado nas prateleiras.
b) O preço da fruta Maçã é R$ 2.25
c) O preço da fruta Pêra é R$ 5

// 3)

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
}else{let mensagem = "Essa mensagem é secreta!!!"    
    console.log(mensagem)
}

a) declara a variavel 'numero', pede pro usuario digitar um numero atraves do
prompt e, o converte para Number na declaração. 

b) se for 10: 'Esse número passou no teste'. Se for -10: dá erro e diz que a variavel
let 'mensagem' nao está declarada/definida.

c)falta o else{let mensagem = "Essa msg é secreta!!!" console.log(mensagem)}.
Caso a ideia seja imprimir mensagens diferentes pra numero > 0 e uma mensagem
específica pra numero < 0.


//EXERCICIOS -----------------

//1)
const maioridade = +prompt("Informe a idade:")

    if(maioridade >= 18){
        console.log("Voce pode dirigir")
    }else{
        console.log("Voce nao pode dirigir")
    }

    
//2)

const turno = prompt("Informe o turno: \n M - para matutino \n V - para Vespertino \n N - para noturno").toLowerCase()

    if(turno == "m") {
        console.log("Bom dia")
    }else if(turno == "v") {
        console.log("Boa tarde")
    }else if(turno == "n"){ 
        console.log("Boa noite")
    }


//3)

const turno = prompt("Informe o turno: \n M - para matutino \n V - para Vespertino \n N - para noturno").toLowerCase()

switch(turno){
    case 'm':
        console.log("Bom dia")
        break
    case 'v':
        console.log("Boa tarde")
        break
    case 'n': 
        console.log("Boa noite")
    }

//4)

const gender = prompt("Qual o genero de filme voce vai assistir?")
const price = +prompt("Qual o preço do ingresso do cinema?")

    if((gender == "fantasia")&&(price<15)){
        const lanche = prompt("Qual lanchinho voce vai comprar?")
        console.log("Bom filme")
        console.log(`Aproveite o seu/sua ${lanche}`)
    }else{
        console.log("Escolha outro filme")
    }
*/

//Desafio 02

const nome = prompt("Informe o seu nome")
const tipoJogo = prompt("Tipo de jogo: \n IN - internacional \n DO - doméstico").toLowerCase()
const etapa = prompt("Etapa do jogo: \n SF - semi-final \n DT -decisão de terceiro lugar \n FI - final")
const categoria = +prompt("Categoria:\n 1 - VIP \n 2 - Conforto \n 3 - Intermediario \n 4 - Econômico")
const quantidade = +prompt("Informe quantidade de ingressos:")
let valor = 0
newValor = 0


if ((etapa == "sf") && (categoria == 1)) {
    valor = 1320
} else if ((etapa == "sf") && (categoria == 2)) {
    valor = 880
} else if ((etapa == "sf") && (categoria == 3)) {
    valor = 550
} else if ((etapa == "sf") && (categoria == 4)) {
    valor = 220
} else if ((etapa == "dt") && (categoria == 1)) {
    valor = 660
} else if ((etapa == "dt") && (categoria == 2)) {
    valor = 440
} else if ((etapa == "dt") && (categoria == 3)) {
    valor = 330
} else if ((etapa == "dt") && (categoria == 4)) {
    valor = 170
} else if ((etapa == "fi") && (categoria == 1)) {
    valor = 1980
} else if ((etapa == "fi") && (categoria == 2)) {
    valor = 1320
} else if ((etapa == "fi") && (categoria == 3)) {
    valor = 880
} else if ((etapa == "fi") && (categoria == 4)) {
    valor = 330
}


            const mudaEtapa = (etapa) => {
                switch (etapa) {
                    case 'sf': etapa = "Semi Final"
                    case 'dt': etapa = "Decisao Terceiro Lugar"
                    case 'fi': etapa = "Final"
                }
            return etapa
            }

            const mudaCategoria = (categoria) => {
                switch (categoria) {
                    case 1: categoria = "1 - VIP"
                    case 2: categoria = "2 - Conforto"
                    case 3: categoria = "3 - Intermediario"
                    case 4: categoria = "4 - Economico"
                }
            return categoria
            }


      
        

if (tipoJogo == "in"){
    newValor = valor *4.1 
}else{
    newValor = valor
} 

    

    console.log(`---Dados da compra--- `)
    console.log(`Nome do cliente: ${nome}`)
    console.log(`Tipo do jogo: ${tipoJogo}`)
    console.log(`Etapa do jogo: ${mudaEtapa(etapa)}`)
    console.log(`Categoria: ${mudaCategoria(categoria)}`)
    console.log(`Quantidade de Ingressos: ${quantidade} ingressos`)
    console.log(`---Valores--- `)
    console.log(`Valor do ingresso:  R$ ${newValor}`)
    console.log(`Valor total:  R$ ${newValor * quantidade}`)



