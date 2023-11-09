// function media (valor1, valor2) {
//     return (valor1 + valor2)/2
// }
// console.log(media(5,4))
//  const numero = 2
//  function multiplica (numero){
//     return numero * 2
//  }
//  console.log(multiplica(numero))

// const notas = [6,6,7]
// function calc(notas){
//     let soma=0
//     let front=''
//     for (let itens of a){
//         soma+=itens
//     }
//     let media= soma/a.length
//     if(media > 7){
//         front+= 'Aprovado'
//     }else{
//         front+= 'Reprovado'
//     }
//     front += ` com nota ${media}!`
//     return front
// }
// console.log(calc(notas))

const pessoas = [
    { nome: "João", sexo: "M", salario: 2500 },
    { nome: "Maria", sexo: "F", salario: 3200 },
    { nome: "Pedro", sexo: "M", salario: 2000 },
    { nome: "Ana", sexo: "F", salario: 2800 },
    { nome: "Carlos", sexo: "M", salario: 3500 }
]
pessoas.forEach(function(pessoa){
    console.log(pessoa.nome)
})

const homen1 = pessoas.findIndex(function(pessoa){
    return pessoa.sexo === "M"
})
console.log(homen1)

const mulher1 = pessoas.find(function(pessoa){
    return pessoa.sexo === "F"
})
console.log(mulher1)

const salarioMaior = pessoas.filter(function(pessoa){
    return pessoa.salario > 2500
})
console.log(salarioMaior)
