const Calculadora = require('./calculadora');

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.soma(2, 2)).toEqual(4);
  });

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.subtracao(2, 2)).toEqual(0);
  });

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.multiplicacao(2, 5)).toEqual(10);
  });

  // Teste para divisão
  it('Deverá retornar a divisão entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.divisao(10, 2)).toEqual(5);
  });
});
