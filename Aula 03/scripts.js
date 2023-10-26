let total = 0
let soma = 0
let maiores21 = 0
let continuar
do {
    let pergunta = parseInt(prompt('Insira uma idade.'))
    total ++
    soma = soma + pergunta
    continuar = confirm("Deseja continuar") 
    if(pergunta > 21){
        maiores21 ++
    }
}
while(continuar === true)

document.write(`Total ${total}<br> Media ${soma/total}<br> Maiores de 21 :${maiores21}<br>`)


//  let tabuada = Number(prompt("Informe o número da tabuada que deseja: "));
//  document.write(`<br>***Tabuada do ${tabuada}***<br><br>`);
//  for (let i = 1; i <= 10 ; i++) {
//      document.write(`${tabuada} x ${i} = ${tabuada * i}<br>`);
//  }

// let contagem = Number(prompt("Numero contagem "))
// document.write(`<br>***Contagem ${contagem}***<br><br>`)
// for (let i = 1; i <= contagem ; i+1) {
//     document.write(`${contagem--}<br>`);
// }