// Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit.
document.write('1 - Escreva um algoritmo para ler uma temperatura em graus Celsius calcular e escrever o valor correspondente em graus Fahrenheit <br/>')
 const valorCels = 10
 const valorFahrenheit = valorCels * 9/5 +32
 document.write('O valor em Fahrenheit é ' , valorFahrenheit.toFixed(2), 'º <br/></br>')

//  2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
//  semana correspondente utilizando a estrutura condicional switch. 

document.write('2 - Crie um programa que peça um número de 1 a 7 e exiba o dia da semana correspondente utilizando a estrutura condicional switch. <br/>')

const diadaSemana = 1

switch (diadaSemana) {
    case 1:
        document.write("Domingo <br/></br>")
        break
    case 2:
        document.write("Segunda <br/></br>")
        break
    case 3:
        document.write("Terça <br/></br>")
        break
    case 4:
        document.write("Quarta <br/></br>")
        break
    case 5:
        document.write("Quinta <br/></br>")
        break
    case 6:
        document.write("Sexta <br/></br>")
        break
    case 7:
        document.write("Sábado <br/></br>")
        break
    default:
        document.write("Dia inválido <br/></br>")
}

// 3. Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

document.write('3 - Crie um programa que peça um número e verifique se ele é positivo negativo ou zero. <br/>')
const num = Number(-1)

if (num > 0) {
    document.write('Esse número é positivo.</br></br>')
} else if (num < 0) {
    document.write('Esse número é negativo.</br></br>')
} else {
    document.write('Esse número é igual a zero.</br></br>')
}

// 4. O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

document.write('4 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos aplicados ao custo de fábrica. Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,calcular e escrever .</br>')
const inicial = 15000
const preçoFinal = inicial * 1.28 * 1.45

document.write(`Custo final ao consumidor R$${preçoFinal.toFixed(2).replace('.', ',')}.</br></br>`)


// 5 - Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// que digite sua altura, em seguida solicitar que digite seu peso e que
// lhe exiba o status. O status vai variar da seguinte forma:
// a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// “Você está abaixo da faixa de peso ideal”;
// b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// “Você está acima da faixa de peso ideal”;

// c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// 24,99, o status a ser mostrado será “Você está dentro da faixa
// de peso ideal”.
document.write('5. Desenvolva um algoritmo que faça o cálculo do índice de massa corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário que digite sua altura, em seguida solicitar que digite seu peso e que lhe exiba o status. O status vai variar da seguinte forma: a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser “Você está abaixo da faixa de peso ideal”; b. Se o IMC estiver acima de 24,99 o status a ser mostrado será “Você está acima da faixa de peso ideal”; c. Se o IMC for igual ou maior que 18,5 e igual ou menor que 24,99, o status a ser mostrado será “Você está dentro da faixa de peso ideal”</br>')
const altura = 1.8
const peso = 70
const IMC = peso/(altura*altura)

if (IMC < 18.5){
    document.write('Você está abaixo da faixa de peso ideal. </br></br>')
} if (IMC > 24.99) {
    document.write('Você está abaixo da faixa de peso ideal. </br></br>')
} else {
    document.write('Você está dentro da faixa de peso ideal. </br></br>')
}

// 6. Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.
document.write('6. Escreva um algoritmo que solicite 2 números e uma operação matemática. O algoritmo deve realizar o cálculo com os 2 números digitados conforme a operação informada.</br>')
const valor01 = 2
const valor02 = 2
const operador = '+'    
    if (operador === '+'){document.write(`Total : ${(valor01 + valor02).toFixed(2).replace('.', ',')}.</br></br>`)}
    if (operador === '-'){document.write(`Total : ${(valor01 - valor02).toFixed(2).replace('.', ',')}.</br></br>`)}
    if (operador === '/'){document.write(`Total : ${(valor01 / valor02).toFixed(2).replace('.', ',')}.</br></br>`)}
    if (operador === '*'){document.write(`Total : ${(valor01 * valor02).toFixed(2).replace('.', ',')}.</br></br>`)}
 
    // 7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
    // a conta do usuário deve ser criada já com um saldo positivo. O
    // usuário precisa informar a quantidade de dinheiro que deseja
    // retirar, esse valor deve ser um número positivo, múltiplo de 5 e
    // menor do que o saldo. Cada saque eletrônico cobra uma taxa de
    // R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
    // certo com o saque, e se o usuário informar um valor maior que o
    // saldo deve ser informado ao usuário que o mesmo não tem dinheiro
    // suficiente em conta para realizar o saque.
    // OBS: Na verificação se o valor do saque é maior que o saldo deve
    // ser considerado e também contabilizado o valor da taxa a ser
    // cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
    // da taxa do saque não pode ser maior que o saldo disponível.
    document.write('7. Faça um algoritmo que simule um caixa eletrônico. Nesse ala conta do usuário deve ser criada já com um saldo positivo. usuário precisa informar a quantidade de dinheiro que desejaretirar, esse valor deve ser um número positivo, múltiplo de menor do que o saldo. Cada saque eletrônico cobra uma taxa deR$4.50. Ao final deve ser informado o saldo da conta caso dê certo com o saque, e se o usuário informar um valor maior quesaldo deve ser informado ao usuário que o mesmo não tem dinhesuficiente em conta para realizar o saque.OBS: Na verificação se o valor do saque é maior que o saldo dser considerado e também contabilizado o valor da taxa a sercobrada pelo saque. Ou seja, o valor a ser sacado somado ao vda taxa do saque não pode ser maior que o saldo disponível.</br>')

    let saldo = 1500
    const saque = 500
    const taxa = 4.50

    if (saque+taxa>saldo){document.write(`Erro valor insuficiente na conta.</br></br>`)}
    if (saque % 5 == 0){document.write(`Saque efetuado com sucesso.</br>Saldo ${saldo.toFixed(2).replace('.', ',')}.</br>Saque ${saque.toFixed(2).replace('.', ',')}.</br></br>`)} else {document.write(`Coloque um valor multiplo e 5.</br></br>`)}

    // 8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
    // a sua categoria, de acordo com a seguinte tabela:
    
    // Idade Peso Categoria
    // Até 12 anos - Infantil
    // 13 a 16 anos Até 40kg Juvenil leve
    // Acima de 40kg Juvenil pesado
    // 17 a 24 anos Até 45kg Sênior leve
    // Acima de 45kg até 60kg Sênior médio
    
    // Acima de 60kg Sênior pesado
    // Acima de 24 anos - Veterano  

    document.write('8. Faça um algoritmo que leia a idade e peso de um atleta e imprima a sua categoria, de acordo com a seguinte tabela:</br>')

    const idadeAtleta = 20
    const pesoAtleta = 45
    if (idadeAtleta <= 12) { document.write("Sua categoria é infantil <br/></br>") }
    else if (idadeAtleta > 12 && idadeAtleta <= 16 && pesoAtleta <= 40) { document.write("Sua categoria é Juvenil leve <br/></br>")}
    else if (idadeAtleta > 12 && idadeAtleta <= 16 && pesoAtleta > 40) {document.write("Sua categoria é Juvenil pesado <br/></br>")}
    else if (idadeAtleta > 17 && idadeAtleta <= 24 && pesoAtleta <= 45) { document.write("Sua categoria é Sênior leve <br/></br>")}
    else if (idadeAtleta > 17 && idadeAtleta <= 24 && pesoAtleta > 45 && pesoAtleta < 60) {document.write("Sua categoria é Sênior médio <br/></br>")}
    else if (idadeAtleta > 17 && idadeAtleta <= 24 && pesoAtleta > 60) {document.write("Sua categoria é Sênior pesado <br/></br>")}
    else if (idadeAtleta > 24) {document.write("Inválido <br/></br>")}

    // 9. Escreva um programa que pergunte a velocidade de um carro. Caso
    // ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
    // multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
    // km acima da velocidade permitida.

    document.write('9. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada km acima da velocidade permitida.</br>')

    const velocidademaxima = 80
    const velocidade = 85
    const multa = ( velocidade - velocidademaxima) * 5
    if (velocidade > 80) {
     document.write(`Você ultrapassou o limite de velocidade e foi multado, o valor da multa é de R$${multa.toFixed(2).replace('.',',')}</br>`)
    } else {
     document.write('Você passou dentro do limite de velocidade!</br>')
    }




