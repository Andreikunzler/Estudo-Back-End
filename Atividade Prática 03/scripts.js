// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;
// let contador
// let menorAlt = 9999
// let maiorAlt = 0

// for(contador = 1; contador < 15; contador++){
//     let altura = Number(prompt("Digite altura"))
//     if(altura>=maiorAlt){
//         maiorAlt = altura
//     }
//     if(altura<=menorAlt){
//         menorAlt = altura
//     }   
// }
// document.write(`Maior altura ${maiorAlt}<br>Menor altura ${menorAlt}<br> Idades contabilizadas ${contador}`)

// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

// let altPedro = 1.5
// let altLucas = 1.1

// for(i = 0; altPedro>altLucas; i++ ){
//     altLucas = altLucas + 0.03
//     altPedro = altPedro + 0.02
// }
// document.write(`Lucas e Pedro tenham o mesmo tamanho no ano de ${i-1}<br>Lucas seja maior que Pedro no ano de ${i}<br>`)

// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...
// let tabuada = Number(prompt("Informe o número da tabuada que deseja: "));
// document.write(`<br>***Tabuada do ${tabuada}***<br><br>`);
// for (let i = 1; i <= 10 ; i++) {
//     document.write(`${tabuada} x ${i} = ${tabuada * i}<br>`);
// }

// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

// let multiplo3 = ""
// let multiplo5 = ""

// for(let i = 1; i < 250; i++ ){
//     if(i % 3 == 0){
//         multiplo3 = multiplo3 + i + ', '
//     }

//      if(i % 5 == 0){
//          multiplo5 = multiplo5 + i + ', '
//     }
// }
// document.write(`Multiplos 3,  ${multiplo5}<br> Multiplos 5,  ${multiplo3}<br>`)

// 5. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

// let contagem = Number(prompt("Numero contagem "))
// document.write(`<br>***Contagem ${contagem}***<br><br>`)
// for (let i = 0; i <= contagem ; i+1) {
//     document.write(`Contagem ${i}, `)
// }
// document.write(`FIM`)

// 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

// for (let i = 30; i >= 1; i--) {
//     let primo = true;
  
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         primo = false;
//         break;
//       }
//     }
  
//     if (primo) {
//       document.write(`[${i}] ,`);
//     } else {
//       document.write(i + ",");
//     }
//   }

// 7.  Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.
let totalSomado = 0
let numerosPositivos = 0
let numerosNegativos = 0

for (let i = 1; i <= 10; i++) {
    let lerNumero = Number(prompt("Digite um número:"));
    totalSomado += lerNumero

    if (lerNumero >= 0) {
        numerosPositivos++
    } else {
        numerosNegativos++
    }
}

let mediaNumeros = totalSomado / 10
let porcentagemPositivos = (numerosPositivos / 10) * 100
let porcentagemNegativos = (numerosNegativos / 10) * 100

console.log(`Média aritimetica: ${mediaNumeros}`)
console.log(`Quantidade de valores positivos: ${numerosPositivos}`)
console.log(`Quantidade de valores negativos: ${numerosNegativos}`)
console.log(`Percentual de valores positivos: ${porcentagemPositivos}`)
console.log(`Percentual de valores negativos: ${porcentagemNegativos}`)



