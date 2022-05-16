const assignCities = require('../src/assignCities');

describe('Crie uma função que retorne um objeto classificando as cidades', () => {
  
  it('ao receber o parâmetro "china", retorna o objeto { megalopolis: 2, megacity: 1, metropolis: 1 }', () => {
    const expected = {
      megalopolis: 2, 
      megacity: 1, 
      metropolis: 1
    };
    const actual = assignCities('china');

    expect(actual).toStrictEqual(expected)
  })

  it('ao receber o parâmetro "brasil", retorna o objeto { megalopolis: 0, megacity: 1, metropolis: 4 }', () => {
    const expected = {
      megalopolis: 0, 
      megacity: 1, 
      metropolis: 4
    };
    const actual = assignCities('brazil');

    expect(actual).toStrictEqual(expected)
  })
});


// expected { megalopolis: 2, megacity: 1, metropolis: 1 }