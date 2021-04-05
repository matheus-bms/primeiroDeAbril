console.log('Hello world')


const countries = [
    {
        country: 'madagascar',
        population: 10000
    },{
        country: 'uganda',
        population: 45000
    },{
        country: 'ruanda',
        population: 11000
    },{
        country: 'burundi',
        population: 12000
    }
]


function countryPopulation(population){
    return countries.filter(x=>{
        return x.population > population
    })
}
console.log(countryPopulation(20000))