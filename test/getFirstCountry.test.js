const { getFirstCountry, checkPopulation } = require('../src/getFirstCountry');

describe('Crie duas funções: getFirstCountry e checkPopulation', () => {
  it('A primeira função deverá retornar o primeiro país com menos de 250 milhões de habitantes', () => {
    const actual = getFirstCountry();
    const expected = 'O primeiro país do rank com menos de 250 milhões de habitantes é: brazil';
    expect(actual).toEqual(expected)
  })

  it('Verifica se todas as cidades possuem mais de 1.000.000 de habitantes', () => {
    const actual = checkPopulation('brazil', 1000000);
    const expected = false;
    expect(actual).toBe(expected)
  })
});
