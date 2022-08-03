class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }
  sub(n: number): this {
    this.numero -= n;
    return this;
  }
  div(n: number): this {
    this.numero /= n;
    return this;
  }
  mult(n: number): this {
    this.numero *= n;
    return this;
  }
}
// essa função de cima permite evocar varios metodos ao mesmo tempo
// ex:

const caculadora = new Calculadora(10);
caculadora.add(10).mult(10);
console.log(caculadora);

// Builder - GoF -> È possivel iniciar um objeto por partes

// export class Request {
//   private method: 'get' | 'post' | null = null;
//   private url: string | null = null;
// }
