const isOnTheList = require('../src/isOnTheList');

describe('Verifica se existe algum país do continente chamado na função listado no rank de países', () => {
  it('Verifica se existe algum país no continente "europe"', () => {
    const actual = isOnTheList('europe');
    const expected = false;
    expect(actual).toBe(expected);
  });

  it('Verifica se existe algum país no continente "asia"', () => {
    const actual = isOnTheList('asia');
    const expected = true;
    expect(actual).toBe(expected);
  });
});