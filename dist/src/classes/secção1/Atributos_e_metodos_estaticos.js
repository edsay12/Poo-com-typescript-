"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    // um mero estatico so pode ser acessado pela propria class nao pela estancia da class
    static falaOi() {
        console.log('oi');
    }
    // e possivei criar um novo o objeto aqui tb
    static criaPessoa(nome, sobrenome) {
        return new Pessoa(nome, sobrenome, this.idadePadrao, this.cpfPadrão);
    }
}
exports.Pessoa = Pessoa;
Pessoa.idadePadrao = 0;
Pessoa.cpfPadrão = '000.000.000.-00 ';
const pessoa = new Pessoa('edvan', 'silva', 21, '134.898.074.56');
// criando um objeto com o metodo estatico
const pessoa2 = Pessoa.criaPessoa('edvan', 'araujo');
// ex;
//const pessoa = new Pessoa('edvan', 'silva', 21, '134.898.074.56');
// pessoa.falaOi(); // isso nao funciona pois e ums estancia da classe
// Pessoa.falaOi(); // isso funciona pois e a pripria classe que esta chamando o metodo
