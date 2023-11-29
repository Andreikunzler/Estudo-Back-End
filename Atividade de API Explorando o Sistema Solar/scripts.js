

// 1. Consuma a API: Utilize o endpoint /bodies para obter uma lista de corpos celestes. Armazene esses dados em um array para futuras operações.
const stars = []

async function getBodies(){
    console.log('Buscando os dados')
    const result = await axios.get('https://api.le-systeme-solaire.net/rest/bodies')
    console.log('Resultado encontrado')
    stars.push(...result.data.bodies)
    getPlanets()
    getEarth()
    getluas()
    planets()
    planetsString()
    planetsMaiores()
    planetsLuas()
    ordemDeDescobrimento()
    distanciaSol('mercure')
    Temperatura8_30()
    const separetedAstros = separateAstros(stars);
    complexSort(separetedAstros)
    findOrbitedPlanets(stars)
    planetsMassAverage(stars)
    distanceBetweenSaturnAndPluto(stars)
    planetsWithMoons(stars)
    dataManipulationAndCalculus(stars)

}
getBodies()

// 2. Filtre os Planetas: Use o método filter para criar um novo array contendo apenas planetas.

function getPlanets(){
    stars.forEach(element => {
        if(element.isPlanet === true){ console.log (element.id)}
    });
}

// 3. Encontre a Terra: Use o método find para encontrar o objeto que representa a Terra no array filtrado.

function getEarth(){
    const findEarth = stars.find((planet) => {
          return planet.englishName === 'Earth'
    })
    console.log(findEarth);
} 

// 4. Verifique Condições com some: Use o método some para verificar se algum planeta no array filtrado não tem luas. 

function getluas(){
    const planetasSemLua = []
    stars.some((planeta)=>{if(planeta.isPlanet === true && planeta.moons == null){planetasSemLua.push(planeta.id)}})
    console.log(planetasSemLua)
}

// 5. Transforme os Dados com map: Use o método map para criar um novo array contendo apenas os nomes dos planetas. 

function planets(){
    const planetas = []
    stars.map((planeta)=>{if(planeta.isPlanet === true){planetas.push(planeta.id)}})
    console.log(planetas)
}

// 6. Classificação por Tamanho: Use os métodos map e sort para criar um novo array que contenha os nomes dos planetas, ordenados pelo seu tamanho (raio).

function planetsOrdenados(){
    const planetas = stars.map((planeta)=> planeta.isPlanet === true)
    planetas.sort((a, b) => a.meanRadius - b.meanRadius);
    console.log(planetas.id)
} 


// 7. Informações Concatenadas: Use o método join para criar uma string que contenha os nomes de todos os planetas do array, separados por vírgulas.

function planetsString(){
    const planetas = []
    stars.map((planeta)=>{if(planeta.isPlanet === true){planetas.push(planeta.id)}})
    let textoPlanetas = planetas.join(", ")
    console.log(textoPlanetas)
}

// 8. Sistema Solar Compacto: Use os métodos para pegar os 5 menores planetas e calcular a soma massa total desses planetas.
function planetsMaiores(){
    let planetas = [];
    
    stars.map((bd) => {
        if (bd.isPlanet === true) {
            planetas.push({
                nome: bd.englishName,
                raio: bd.meanRadius,
                massa: Math.pow(bd.mass.massValue,bd.mass.massExponent)              
            });
        }
    });

    planetas.sort((a, b) => a.raio - b.raio);
    planetas.splice(5,3)
    const somaMassas = planetas.reduce((acc,planeta)=>{
        return acc+planeta.massa
    },0)
console.log(somaMassas)
}

// 9. Luas e Desidade: verifique se algum planeta tem mais de 2 luas e, em caso afirmativo, listar todos os planetas entre eles que tem densidade maior que 1
function planetsLuas(){
    const planetas = []
    stars.map((bd) => {
        if (bd.isPlanet === true && bd.moons && bd.moons.length > 2 && bd.density > 1 )
            planetas.push(bd.id)   
    })
    console.log(planetas)
}

// 10. Ordem de descobrimento: Encontre e imprima na tela todos nomes dos astrose suas respectivas datas de descoberta (os que tiverem), ordenando-os do mais recente ao mais antigo.

function ordemDeDescobrimento(){
    let astrosAno = [];
    stars.map((bd)=>{
        if(bd.discoveryDate){
            bd.discoveryDate.split('/')
            astrosAno.push({
                nome: bd.englishName,
                data: bd.discoveryDate,
                dia:Number(bd.discoveryDate.split('/')[0]),
                mes:Number(bd.discoveryDate.split('/')[1]),
                ano:Number(bd.discoveryDate.split('/')[2])    
            })
        }
    })

    astrosAno.sort((a,b)=>{
        if(a.ano!==b.ano){
            return b.ano-a.ano
        }else if(a.mes!==b.mes){
            return b.mes-a.mes
        }else{
            return b.dia-a.dia
        }
    })
    console.log(astrosAno)
}

// 11. Encontrando Astro: Faça uma função que recebe um nome, e retorna a distancia, a massa, gravidade e densidade

function distanciaSol(planetaNome){
    const planetas = []
    stars.map((bd) => {
        if (bd.id === planetaNome)
            planetas.push({
            nome: bd.englishName,
            distancia: bd.semimajorAxis,
            massa:Math.pow(bd.mass.massValue,bd.mass.massExponent),
            gravidade:bd.gravity,
            densidade:bd.density, 
        })   
    })
    console.log(planetas)
}

// 12. Filtro de Temperatura: econtre os planetas que tem uma temperatura de 8 a 30 graus celsius. Cuidado que o AvgTemp está na escala Kelvin. Ordene-os do mais frio ao mais quente.

function Temperatura8_30(){
    const planetas = []
    stars.map((bd) => {
        if (bd.isPlanet === true && bd.avgTemp > 281 && bd.avgTemp < 303)
            planetas.push(bd.id)   
    })
    console.log(planetas)
}

// 13. Separando Planetas. Faça uma função que retorna um objeto, separando todos os astros pelo seu tipo.
function separateAstros(stars) {
    const newObj = stars.reduce((acc, body) => {
      acc[body.bodyType] = (acc[body.bodyType] || []);
      acc[body.bodyType].push(body);
      return acc;
    }, {})
    console.log(newObj)
    return newObj;
  }
  
//   14. Ordenação Complexa: Use sort e slice para ordenar os astros primeiro por tipo e depois por tamanho, pegando os 3 maiores de cada tipo.

  function complexSort(separetedAstros) {
    let astros = {...separetedAstros};
    for (const key in astros) {
      astros[key]
      .sort((a, b) => b.meanRadius - a.meanRadius)
      astros[key] = astros[key].slice(0, 3);
    }
    console.log(astros)
  }
 
//   15. Encontrando planetas orbitados. Encontre todos os planetas que são orbitados por pelo menos um corpo celeste. Imprima na tela o nome do planeta e seus orbitadores. 
  function findOrbitedPlanets(stars) {
    const filtered = stars.filter(planet => planet.moons)
    filtered.forEach(planet => {
      console.log(planet.englishName, planet.moons)
    })
  }

//   16. Média da Massa dos Planetas: Use o método reduce para calcular a média da massa de todos os planetas e imprimir o resultado. 
  function planetsMassAverage(stars) {
    const filtered = stars.filter(planet => planet.moons)
    filtered.forEach(planet => {
      console.log(planet.englishName, planet.moons)
    })
  }
  
//   17. Calcule a distância entre Saturno e Plutão. Utilize o perihelion e o aphelion para calcular a menor distância possível entre os planeta
  function distanceBetweenSaturnAndPluto(stars) {
    console.log("Distância entre Saturno e Plutão")
    const plutao = stars.find(body => body.englishName === 'Pluto')
    const saturn = stars.find(body => body.englishName === 'Saturn')
  
    const sum = plutao.perihelion - saturn.aphelion;
    console.log(sum);
  }
//   18. Planetas com Luas: liste todos os planetas que têm uma ou mais luas. Imprima na tela o planeta, e quantas luas ele tem.  
  function planetsWithMoons(stars) {
    const planets = stars.filter((planeta)=> planeta.isPlanet === true)
    const filtered = planets.filter(planet => planet.moons);
    filtered.forEach(planet => {
      console.log(`Nome do planeta: ${planet.englishName} | Quantidade de luas: ${planet.moons.length}`)
    });
  }
//   19. O Desafio Final em Manipulação de Dados e Cálculos 
//   Análise Estatística do Sistema Solar: Utilize os métodos para realizar uma análise estatística completa dos planetas do sistema solar. 
//   - Crie um novo array que contém apenas planetas (excluindo luas, asteroides, etc.). 
//   - Crie um novo array que contém apenas as massas dos planetas. - Ordene o array de massas em ordem crescente. 
//   - Calcule a mediana das massas dos planetas. A mediana é o valor do meio em 
   
  function dataManipulationAndCalculus(stars){
    const planets = stars.filter((planeta)=> planeta.isPlanet === true)
    const justPlanetsMass = planets
      .map(({mass}) => calcPlanetMass(mass))
      .sort();
  
    let mediana = 0
    const isEvenLength = justPlanetsMass.length % 2 === 0;
    if(isEvenLength) {
      const middleItem1 = justPlanetsMass[justPlanetsMass.length / 2 - 1];
      const middleItem2 = justPlanetsMass[justPlanetsMass.length / 2];
      mediana = ( middleItem1 + middleItem2 ) / 2;
      console.log("Mediana com array par: ", mediana);
  
    } else {
      mediana = justPlanetsMass[justPlanetsMass.length / 2 - 0.5];
      console.log("Mediana com array ímpar: ", mediana);
    }
  
    const planetWithClosestMassToMediana = planets.reduce((acc, planet) => {
      const planetMass = calcPlanetMass(planet.mass)
      if(planetMass < Math.abs(calcPlanetMass(acc.mass) - mediana)) {
        acc = planet
      }
      return acc;
    });
  
    console.log("Planeta com massa mais perto da mediana", planetWithClosestMassToMediana);
  }
  
  function calcPlanetMass(mass){
    return mass.massValue * Math.pow(10, mass.massExponent);
  }