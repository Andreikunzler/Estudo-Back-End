function fetchUsers(){
    axios.get('https://655e50109f1e1093c59ae3f0.mockapi.io/cars').then(reponse => { 
        const cars = reponse
        console.log(cars)
    })
    .catch(error =>{
        console.log('Erro na busca' + error)
    })
}
fetchUsers()
