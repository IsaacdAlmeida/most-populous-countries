const getMostPopulatedCity = require('../src/getMostPopulatedCity')

describe('Retorna um Array contendo o nome da cidade, estado, população e rank da cidade mais populosa do país', () => {
  it('ao receber o parâmetro "brazil", retorna um array com as informações corretas', () => {
    const actual = getMostPopulatedCity('brazil')
    const expected = [ 'sao paulo', 'sao paulo', 11253503, 1 ]
    expect(actual).toStrictEqual(expected)
  });

  it('ao receber o parâmetro "USA", retorna um array com as informações corretas', () => {
    const actual = getMostPopulatedCity('USA')
    const expected = [ 'new-york', 'new-york', 8804190, 1 ]
    expect(actual).toStrictEqual(expected)
  });

  
  it('ao receber o parâmetro "mexico", retorna um array com as informações corretas', () => {
    const actual = getMostPopulatedCity('mexico')
    const expected = [ 'tijuana', 'baja-california', 1810645, 2 ]
    expect(actual).toStrictEqual(expected)
  });
})
