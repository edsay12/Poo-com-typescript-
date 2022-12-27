"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf.replace(/\D/g, '');
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
}
exports.Pessoa = Pessoa;
const pessoa = new Pessoa('edvan', 'silva', 21, '134.898.074.56');
console.log((pessoa.cpf = '111.222.334-22'));
console.log(pessoa.cpf);
