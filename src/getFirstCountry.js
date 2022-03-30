const data = require('../data/countries_data')

// Hoje você será responsável por criar duas funções
// A primeira dela é para encontrar o primeiro país com menos de 250 milhões de habitantes
// o retorno da função deverá ser uma string com a frase: "O primeiro país do rank com menos de 250 milhões de habitantes é: 'país'"

// a segunda função receberá dois parâmetros:
// o primeiro parâmetro recebe um país (você deve passar para o parâmetro o país encontrado na função anterior);
// o segundo parâmetro deve verificar se todas as cidades daquele país possuem mais de 1.000.000 de habitantes (o resultado deverá ser um booleano)

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