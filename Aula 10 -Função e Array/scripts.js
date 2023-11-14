
// // Arrow Function
// const sum =(Numero1, Numero2) => Numero1 + Numero2
// console.log(sum(3,5))

// const ages = [15,22,18]
// const fliteredAges = ages.filter(age => age >= 18)
// console.log(fliteredAges)


// const numberList = [ 1, 3, 5, 4, 7, 9, 10, 11]
// const filteredNumber = numberList.filter(number => number % 2 === 0)
// console.log(filteredNumber)

// // length usado para contar tudo no array
const tarefas =[]

function adicionarTarefa(title,description){
    if(title != null){
    let tarefa ={
        title:title,
        description:description,
        completed:false   
    }
    tarefas.push(tarefa)
    console.log('Tarefa Adicionada com sucesso')}
    else{console.log('Título inválido')}
}
adicionarTarefa('1ª Tarefa','Descrição 1ª tarefa')
console.log(tarefas)



