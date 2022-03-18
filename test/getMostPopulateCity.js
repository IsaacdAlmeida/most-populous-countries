const data = require('../data/countries_data')

const getMostPopulateCity = (country) => {
  const findPopulateCity = findCity = data.countries.find((item) => item.name === country).cities;
  const cityName = findPopulateCity.reduce((acc, item) => item.population > acc.population ? item : acc);
  return Object.values(cityName)
}

console.log(getMostPopulateCity('india'));