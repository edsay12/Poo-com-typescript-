"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    getIdade() {
        return this.idade;
    }
    getNomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    getCpf() {
        return this.cpf;
    }
}
exports.Pessoa = Pessoa;
// usando o super
class Aluno extends Pessoa {
    constructor(matricula, nome, sobrenome, idade, cpf) {
        super(nome, sobrenome, idade, cpf);
        this.matricula = matricula;
    }
}
exports.Aluno = Aluno;
const aluno = new Aluno('0011002', 'lucas', 'silva', 21, '134.223.332-56');
console.log(aluno);
//Get e seter em ts
