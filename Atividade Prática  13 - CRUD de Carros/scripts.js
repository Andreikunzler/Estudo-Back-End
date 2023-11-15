
const Vehicles = []

function addVehicle(model, brand,year, color, price){
    let Vehicle ={
        id:Vehicles.length + 1,
        model,
        brand,
        year,
        color,
        price,
    }
Vehicles.push(Vehicle)
console.log('Veiculo cadastrado com sucesso')}

function editVehicle (id, newmodel, newbrand, newyear, newcolor, newprice){
    const index = Vehicles.findIndex(Vehicle => Vehicle.id === id)
    Vehicles[index] = {
        id,
        model: newmodel,
        brand: newbrand,
        year: newyear,
        color: newcolor,
        price: newprice,
    }
    console.log('Veiculo editado com sucesso')}

function deletVehicle (id){
    const index = Vehicles.findIndex(Vehicle => Vehicle.id === id)
    console.log('Veiculo deletado com sucesso')
    Vehicles.splice(index,1)
}


addVehicle('Civic', 'Honda', 2012, 'Preto', 30000)
addVehicle('Mob', 'Fiat', 2012, 'Preto', 30000)
addVehicle('Argo', 'Fiat', 2015, 'Azul', 50000)

document.write(`<br>Listar todos os veículos<br>`)
for (let i of Vehicles) {
    document.write(`
    ID: ${i.id} 
    | Modelo: ${i.model}
    | Marca: ${i.brand} 
    | Ano: ${i.year} 
    | Cor: ${i.color} 
    | Preço: ${i.price.toFixed(2).replace('.',',')} 
    <br>`)}


document.write(`<br>Filtrar veículos por marca Honda <br>`)
const filtroMarca = Vehicles.filter( Vehicle => Vehicle.brand ==='Honda')
    for (let i of filtroMarca) {
         document.write(`
         ID: ${i.id} 
         | Modelo: ${i.model}
         | Marca: ${i.brand} 
         | Ano: ${i.year} 
         | Cor: ${i.color} 
         | Preço: ${i.price.toFixed(2).replace('.',',')} 
         <br>`)}

editVehicle(2,'Cronos', 'Fiat', 2013, 'Preto', 70000)  
 
 document.write(`<br>Listar todos os veículos atualizada<br>`)
for (let i of Vehicles) {
    document.write(`
    ID: ${i.id}  
    | Modelo: ${i.model} 
    | Marca: ${i.brand}  
    | Ano: ${i.year}  
    | Cor: ${i.color}  
    | Preço: ${i.price.toFixed(2).replace('.',',')} 
    <br>`)}

deletVehicle(3)    
    document.write(`<br>Listar todos os veículos atualizada após a exclusão <br>`)
    for (let i of Vehicles) {
        document.write(`
        ID: ${i.id}  
        | Modelo: ${i.model} 
        | Marca: ${i.brand}  
        | Ano: ${i.year}  
        | Cor: ${i.color}  
        | Preço: ${i.price.toFixed(2).replace('.',',')} 
        | <br>`)}
    
Vehicles.sort()



