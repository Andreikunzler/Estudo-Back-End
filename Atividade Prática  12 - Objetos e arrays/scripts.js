
const pessoas = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
        },
        {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
        },
        {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
        },
        {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
        },
        {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
        },
        {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
        },
        {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
        },
]

// 1. Imprima no console a quantidade de pessoas Total.
document.write(`Total de pessoas: ${pessoas.length}<br>`)

// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
let totalF = 0
for (let i of pessoas) {if(i.sexo === "F") {totalF++}}
document.write(`Total de pessoas do sexo Feminino: ${totalF}<br>`)

// 3. Imprima no console a soma do salário de todas as pessoas.
let totalS = 0
for (let j of pessoas) {totalS = totalS + j.salario}
document.write(`Soma do salário de todas as pessoas: R$${totalS.toFixed(2).replace('.',',')}<br>`)

// 4. Imprima no console a média do salário de todas as pessoas.
document.write(`Média do salário de todas as pessoas: R$${(totalS/pessoas.length).toFixed(2).replace('.',',')}<br>`)

// 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino
let totalSM = 0
let totalM = 0
for (let p of pessoas) {if(p.sexo === "M") {totalSM = totalSM + p.salario, totalM++}}
document.write(`Soma do salário de todos as pessoas do sexo Masculino: R$${totalSM.toFixed(2).replace('.',',')}<br>`)

// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino
document.write(`Média do salário de todas as pessoas do sexo Masculino: R$${(totalSM/totalM).toFixed(2).replace('.',',')}<br>`)

// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
pessoas.some(pessoa => document.write(`${((pessoa.salario > 7000)?"Verdadeiro":"Falso")}/`))

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
const indexPessoa = pessoas.findIndex(pessoa => pessoa.nome ==='Eva Trindade')
document.write(`<br>Posição da pessoa de nome 'Eva Trindade': ${indexPessoa}<br>`)

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
const filterPessoas = pessoas.filter(pessoa => pessoa.nome.includes("Silva"));
document.write(`Pessoas que o nome possua o sobrenome "Silva".<br>`)
for (let x of filterPessoas) {
    document.write(`
    | Nome: ${x.nome}
    | Sexo: ${x.sexo} 
    | Salário: ${x.salario.toFixed(2).replace('.',',')} 
    <br>`)}

// 10. Imprima os nomes utilizando o MAP
document.write(`Todos os nomes:<br>`)
pessoas.map(pessoa => document.write(`${pessoa.nome}<br>`))

