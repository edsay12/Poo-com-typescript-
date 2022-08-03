// Faz meio que uma copia de uma classe depois disso ele faz algo a mais(let's bora)
class Animal {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Decorei tua classe haha');
  return class extends target {
    cor: string;
    constructor(...args: any[]) {
      super(...args);
      this.cor = args[0].split('').reverse().join('', ',');
    }
  };
}

const AnimalDecorator = decorator(Animal);

const animal = new AnimalDecorator('rosa');
console.log(animal);
