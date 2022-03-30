const data = require('../data/countries_data')

/* Escreve uma função que, ao receber um nome de um dos países listados no 'countries_data' como parâmetro,
retorna um array com o nome da cidade, estado, população e rank da cidade mais populosa desse país */

/* resultado esperado ao passar 'india' como parâmetro
[ 'delhi', 'dehli', 11007835, 2 ] */

const getMostPopulateCity = (country) => {
  const findPopulateCity = findCity = data.countries.find((item) => item.name === country).cities;
  const cityName = findPopulateCity.reduce((acc, item) => item.population > acc.population ? item : acc);
  return Object.values(cityName)
}

console.log(getMostPopulateCity('india'));