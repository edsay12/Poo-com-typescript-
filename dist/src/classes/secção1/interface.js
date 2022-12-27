"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
// usa a palavre implements inves de extends se colocar , podem ser infinitos tipos
// uma interfaçe pode extender outras interfaces
// interface PessoaFisica extends TipoPessoa, cpf {}
class Pessoa {
    constructor(nome, sobrenome, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
}
exports.Pessoa = Pessoa;
