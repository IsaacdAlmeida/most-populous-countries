const data = require('../data/countries_data')

const getFirsCountry = () => {
  const countryName = data.countries.find((item) => item.population < 250_000_000).name;
  const phrase = `O primeiro país do rank com menos de 250 milhões de habitantes é: ${countryName}`;
  return phrase
}

console.log(getFirsCountry());

const getCitiesGreaterThan = (country, population) => {
  const getCitiesFromCountry = data.countries.find((item) => item.name === country).cities
  const checkPopulation = getCitiesFromCountry.every((item) => population > item.population);
  return checkPopulation;
}

console.log(getCitiesGreaterThan('brazil', 1000000));