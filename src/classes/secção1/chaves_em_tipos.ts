// e possive espelhar um tipo

type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca']; //espelhamento de tipo
  year: Veiculo['ano'];
  name: string;
};

export const carro: Car = {
  brand: 'ford',
  year: 2021,
  name: 'firulinha',
};
