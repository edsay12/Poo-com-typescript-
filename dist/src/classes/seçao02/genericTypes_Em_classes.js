"use strict";
// export class Pessoa<T, U> {
//   constructor(public nome: T, public idade: U) {}
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilha = void 0;
// const pessoa = new Pessoa('edvan', 21);
// estrutura de dados pilha
class Pilha {
    constructor() {
        this.contador = 0;
        this.elementos = {};
    }
    push(elemento) {
        this.elementos[this.contador] = elemento;
        this.contador++;
    }
    isEmpty() {
        return this.contador === 0;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        this.contador--;
        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }
    tamanho() {
        return this.contador;
    }
    mostrarPilha() {
        console.log(this.elementos);
    }
}
exports.Pilha = Pilha;
const pilha = new Pilha();
pilha.push('vaca');
pilha.push('gato');
pilha.push('cachorro');
pilha.pop();
pilha.mostrarPilha();
