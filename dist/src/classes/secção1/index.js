"use strict";
// Usando classes com typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj) {
        this.colaboradores = []; // uma classe em typescript tambem eum tipo :)
        this.nome = nome;
        this.cnpj = cnpj;
    }
    adicionaColaborador(colaborador) {
        this.colaboradores.push(colaborador);
    }
}
exports.Empresa = Empresa;
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
const empresa1 = new Empresa('Udemy', '71.580.684/0001-96');
const colaborador1 = new Colaborador('edvan', 'araujo');
const colaborador2 = new Colaborador('lucio', 'araujo');
const colaborador3 = new Colaborador('joaquin', 'araujo');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
