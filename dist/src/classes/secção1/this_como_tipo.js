"use strict";
class Calculadora {
    constructor(numero) {
        this.numero = numero;
    }
    add(n) {
        this.numero += n;
        return this;
    }
    sub(n) {
        this.numero -= n;
        return this;
    }
    div(n) {
        this.numero /= n;
        return this;
    }
    mult(n) {
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
