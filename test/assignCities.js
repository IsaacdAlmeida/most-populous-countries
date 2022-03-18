const data = require('../data/countries_data')

const assignCities = (country) => {
  const citiesArray = data.countries.find((item) => item.name === country).cities
   
  const citiesObjects = {
    megalopolis: citiesArray.filter((item) => item.population >= 15_000_000).length,
    megacity: citiesArray.filter((item) => item.population >= 10_000_000 && item.population < 15_000_000).length,
    metropolis: citiesArray.filter((item) => item.population < 10_000_000).length
  }
  return citiesObjects;
}

// expected { megalopolis: 2, megacity: 1, metropolis: 1 }