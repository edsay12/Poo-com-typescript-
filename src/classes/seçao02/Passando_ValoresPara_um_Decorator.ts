// O decorator e um objeto impostor (let's bora)
// para passar valores para um decorator usamos o decorator factory.

function decoratorFactory<T>(param1: T, param2: T) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('hhello eu sou um decorator');
    return class extends target {
      cor: string;
      constructor(...args: any[]) {
        super(...args);
        this.cor = 'azul Violeta';
      }
    };
  };
}

@decoratorFactory('vaca', 'porco')
export class Animal {
  constructor(public cor: string) {}
}
// e basicamente uma funçao que recebe uma classe e faz algo antes de me dar a classe novamente

// const AnimalDecorator = decorator(Animal);

const animal = new Animal('roxo');
console.log(animal);
