const data = require('../data/countries_data')

const isOnTheList = (continent) => data.countries.some((item) => item.location === continent)

console.log(isOnTheList('europe'));