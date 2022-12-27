// overload de funções

import { getSystemErrorMap } from 'util';

///// type Adder = (x: number) => number; // modo normal

// Mais vamos pensar que nosso função deve em um momento receber 2 parametros
// ou ate varios parametros

// type Adder = {
//   (x: number): number;
//   (x: number, y: number): number;
//   (...arg: number[]): number;
// };
// para usar em uma funçao os valores devem ser checados

//Encadeamento opcional

// type Documento = {
//   titulo: string;
//   text: string;
//   data?: Date;
// };

// const documento: Documento = {
//   titulo: 'O titulo',
//   text: 'my text ',
//   // data: new Date(),
// };
//Aqui iria retornar um erro ja que eu nao tenho o date no documento
// porem ao adicionar o ? ele me retorna o undefine nao o erro
// console.log(documento.data?.toDateString());

// Já o ?? funciona como um if ou seja vai retornar oque estiver depois do ?? caso
// o metodo principal não exista ou retorne um erro
// console.log(documento.data?.toDateString() ?? 'Não existe');

//type Predicate
// Sempre que o valor da função for true o value e um numero

// function isNumber(value: unknown): value is number {
//   return typeof value === 'number';
// }

// export function soma<T>(...args: T[]): number | null {
//   const retorno = args.reduce((sum, value) => {
//     if (isNumber(sum) && isNumber(value)) {
//       return sum + value;
//     } else {
//       return sum;
//     }
//   }, 0);
//   return retorno;
// }

// console.log(soma(4, 23, 4, 5));

// tipos genericos
//Record ->Diz que e um objeto o primeiro parametro e a chave e o segundo o valor

// const objeto1: Record<string, string> = {
//   nome: 'luiz',
//   sobrenome: 'silva',
//   // idade: 30, -> nâo funciona pois nao e do tipo string:string
// };

// const objeto1: Record<string, string | number> = {
//   nome: 'luiz',
//   sobrenome: 'silva',
//   idade: 30,
// };

//required -> torna tudo como required
//partial -> torna tudo que era required em opcional
// readonly -> torna tudo como readonly
//pick<'nome | 'sobrenome'> -> Faz com que a pessoa escolha entre nome e sobrenome
//exclude<abc,cde> ->Pega em todos os tipos que estão em abc e nao estao em cde ouseja fica o (ab)
//extract<abc,cde> ->Pega oque esta em abc e que tambem  tem  no cde ou seja fica (c)

// pilares do poo
// 1-) abstração -> Um objeto so tem aquilo que ele precisa nada mais que isso
// 2-) herançã -> um objetos podem herdar caracateristicas de outro objeto
// 3-) encapsulamento -> Visa ocultar parte internas de um objeto
// 4-) polimorfismos -> Algo polimorfo tem a habilidade de assumir diferentes formas

// - Metodos staticos
// get e seters
// decorators

// Oque o static
// -> o metodo static e um metodo como o nome ja diz estatico
// e um elemento que nao muda se eu estanciar uma classe ela tiver um metodo
// estatico ele vai ultilizar esse metodo na outra classe tambem sem nenhuma mudança
// o metodo statico nao pode ser acessado pela intancia da classe mais sim
// pela propia classe

// export class Pessoa {
//   constructor(public nome: string, public sobrenome: string) {}
//   static falaoi() {
//     console.log('oi');
//   }
// }
// Pessoa.falaoi();

// Decorator de classe no typescript
// -> È um objeto impostor
// o decorator recebe o target como padrao

// function decorator<T>(target: T): T {
//   console.log('chamei o decorator');
//   return target;
// }

// @decorator // mostra que o decorator esta decorando a classe
// export class Animal {
//   constructor(public cor: string) {}
// }

// const animal = new Animal('red');
// console.log(animal);

// decorator factory
// function DecoratorFactory<T>(prefix: string): any {
//   return (target: T) => {
//     console.log(prefix, target);
//   };
// }

// @DecoratorFactory('ola') // mostra que o decorator esta decorando a classe
// export class Animal {
//   constructor(public cor: string) {}
// }

// mais oque occore se que quiser executar determinada tarefa antes da criação da class oque eu
// poderia fazer ?

//decorator entity -> no exemplo vamos criar um decorator que vai anotar a versão da api
// // constructor == target
// function SetApiVersion(apivertsion: string) {
//   return (constructor: any) => {
//     return class extends constructor {
//       version = apivertsion;
//     };
//   };
// }

// @SetApiVersion('1.3.4')
// class Api {}
// console.log(new Api());

// Property decorator
// function DecoradorDePropriedade(target: any, key: string | symbol): any {
//   let valorPropiedade: any;
//   return {
//     get: () => valorPropiedade,
//     set: (value: any) => {
//       if (value.length < 5) {
//         throw new Error('Tamanho deve conter mais de  5 caracters ');
//       } else {
//         valorPropiedade = value;
//       }
//     },
//   };
// }

// class Movie {
//   @DecoradorDePropriedade
//   title: string; // validação se for <5 damos um error

//   constructor(t: string) {
//     this.title = t;
//   }
// }

// const movie = new Movie('adventure');
// console.log(movie.title);

// mothod decorator
// function methodDecorator(target: any, item: any, descriptor: any) {
//   console.log(target);
//   console.log(item);
//   console.log(descriptor);
//   return {
//     value: () => {
//       return 'reescrevi a função';
//     },
//   };
// }

// class Pessoa {
//   constructor(public name: string, public sobrenome: string) {}
//   @methodDecorator
//   pessoa() {
//     return `ola ${this.name} ${this.sobrenome}`;
//   }
// }

// const pessoa = new Pessoa('edvan', 'silva');
// console.log(pessoa.pessoa());
