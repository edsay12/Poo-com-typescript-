import { Persistency } from './Persistency';

describe('Persistency', () => {
  afterEach(() => {
    jest.clearAllMocks; // limpa os spyOn ao executar o teste
  });

  test('should be undefined', () => {
    const sut = new Persistency(); //sistem under test (classe principal)
    expect(sut.saveOrder()).toBeUndefined();
  });

  test('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // espia o metodo consoele.log
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  test('should call console.log with "Pedido salvo com sucesso"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // espia o metodo consoele.log
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso'); // virifica se o console.log tem isso aqui
  });
});
