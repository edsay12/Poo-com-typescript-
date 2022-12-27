"use strict";
// Associação entre Classes O tipo mais comum de relacionamento em UML,
//uma associação define que os objetos de uma classe são conectados a objetos d
//e outra classe. Sem essa associação nenhuma mensagem pode passar entre
//objetos da classe em tempo de execução.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maquina = exports.Caneta = exports.Ferramenta = exports.Excritor = void 0;
// e uma relação do tipo tem 1 ou seja o escritor possue uma ferramenta
// mais ambos nao dependem uma da outra
class Excritor {
    constructor(_nome) {
        this._nome = _nome;
        this._ferramenta = null;
    }
    set ferramenta(ferramenta) {
        this._ferramenta = ferramenta;
    }
}
exports.Excritor = Excritor;
class Ferramenta {
    constructor(_nome) {
        this._nome = _nome;
    }
    get nome() {
        return this._nome;
    }
}
exports.Ferramenta = Ferramenta;
class Caneta extends Ferramenta {
    escrever() {
        console.log(this.nome, ' ', 'escrevendo');
    }
}
exports.Caneta = Caneta;
class Maquina extends Ferramenta {
    escrever() {
        console.log(this.nome, '', 'Digitando');
    }
}
exports.Maquina = Maquina;
const escritor = new Excritor('Fabio');
const caneta = new Caneta('big');
escritor.ferramenta = caneta;
console.log(escritor);
