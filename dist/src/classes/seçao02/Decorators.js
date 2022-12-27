"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UmaPessoa_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UmaPessoa = void 0;
// Classes
function decoradorDeClasse(construtor) {
    // Chamado na criação da classe
    console.log('CLASSE');
    console.log(construtor);
    console.log('###');
    // Retorno pode ser omitido
    return class extends construtor {
    };
}
// Método de instância (normal)
function decoradorDeMetodo(prototipoDaClasse, nomeDoMetodo, descritorDePropriedade) {
    // Chamado na criação do método (não precisa chamar o método)
    console.log('MÉTODO NORMAL');
    console.log(prototipoDaClasse);
    console.log(nomeDoMetodo);
    console.log(descritorDePropriedade);
    console.log('###');
    // Retorno pode ser omitido
    return {
        // value altera o retorno original:
        // value: (...args: any[]) => console.log(args),
        writable: true,
        enumerable: true,
        configurable: true,
    };
}
// Método estático
function decoradorDeMetodoEstatico(classConstructor, nomeDoMetodo, descritorDePropriedade) {
    // Chamado na criação do método (não precisa chamar o método)
    console.log('MÉTODO ESTÁTICO');
    console.log(classConstructor);
    console.log(nomeDoMetodo);
    console.log(descritorDePropriedade);
    console.log('###');
    // Retorno pode ser omitido
    return {
        // Use get/set OU value
        enumerable: true,
        configurable: true,
    };
}
// Parâmetro de método
function decoradorDeParametroDeMetodo(prototipoDaClasse, nomeDoMetodo, indiceDaPropriedade) {
    // Chamado na criação do método
    console.log('PARÂMETRO DE MÉTODO');
    console.log(prototipoDaClasse);
    console.log(nomeDoMetodo);
    console.log(indiceDaPropriedade);
    console.log('###');
    // Retorno é ignorado
}
// Parâmetro de método estático
function decoradorDeParametroDeMetodoEstatico(classConstructor, nomeDoMetodo, indiceDaPropriedade) {
    // Chamado na criação do parâmetro (não precisa chamar o método)
    console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
    console.log(classConstructor);
    console.log(nomeDoMetodo);
    console.log(indiceDaPropriedade);
    console.log('###');
    // Retorno é ignorado
}
// Propriedade
function decoradorDePropriedade(prototipoDaClasse, nomePropriedade) {
    // Chamado na criação da propriedade
    console.log('DECORADOR DE PROPRIEDADE');
    console.log(prototipoDaClasse);
    console.log(nomePropriedade);
    console.log('###');
    // Retorno pode ser omitido
    // Use get e set para manipular o valor da propriedade
    let valorPropriedade;
    return {
        enumerable: true,
        configurable: true,
        get: () => valorPropriedade,
        set: (valor) => {
            if (typeof valor === 'string') {
                valorPropriedade = valor.split('').reverse().join('');
                return;
            }
            valorPropriedade = valor;
        },
    };
}
// Propriedade estática
function decoradorDePropriedadeEstatica(classConstructor, nomePropriedade) {
    // Chamado na criação da propriedade estática
    console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
    console.log(classConstructor);
    console.log(nomePropriedade);
    console.log('###');
    // Retorno pode ser omitido
    return {
        // Use get/set OU value
        enumerable: true,
        configurable: true,
    };
}
// Getter/Setter
function decoradorDeGetterESetterNormal(prototipoDaClasse, nomePropriedade, descritorDePropriedade) {
    // Chamado na criação do método
    // (só pode ser aplicado no getter ou no setter - não em ambos)
    console.log('GETTER/SETTER normal');
    console.log(prototipoDaClasse);
    console.log(nomePropriedade);
    console.log(descritorDePropriedade);
    console.log('###');
    // Retorno pode ser omitido
    return {
        // Use get/set OU value
        enumerable: true,
        configurable: true,
    };
}
// Getter/Setter estático
function decoradorDeGetterESetterEstatico(classConstructor, nomePropriedade, descritorDePropriedade) {
    // Chamado na criação do método
    // (só pode ser aplicado no getter ou no setter - não em ambos)
    console.log('GETTER/SETTER estático');
    console.log(classConstructor);
    console.log(nomePropriedade);
    console.log(descritorDePropriedade);
    console.log('###');
    // Retorno pode ser omitido
    return {
        // Use get/set OU value
        enumerable: true,
        configurable: true,
    };
}
// A classe e o uso dos decorators
let UmaPessoa = UmaPessoa_1 = class UmaPessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    metodo(msg) {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }
    static metodoEstatico(msg) {
        return UmaPessoa_1.propriedadeEstatica + ' - ' + msg;
    }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    set nomeCompleto(valor) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome)
            return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
    static get staticPropertyGetterSetter() {
        return UmaPessoa_1.propriedadeEstatica;
    }
    static set staticPropertyGetterSetter(value) {
        UmaPessoa_1.propriedadeEstatica = value;
    }
};
UmaPessoa.propriedadeEstatica = 'VALOR PROPRIEDADE ESTÁTICA';
__decorate([
    decoradorDePropriedade,
    __metadata("design:type", String)
], UmaPessoa.prototype, "nome", void 0);
__decorate([
    decoradorDeMetodo,
    __param(0, decoradorDeParametroDeMetodo),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], UmaPessoa.prototype, "metodo", null);
__decorate([
    decoradorDeGetterESetterNormal,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], UmaPessoa.prototype, "nomeCompleto", null);
__decorate([
    decoradorDePropriedadeEstatica,
    __metadata("design:type", Object)
], UmaPessoa, "propriedadeEstatica", void 0);
__decorate([
    decoradorDeMetodoEstatico,
    __param(0, decoradorDeParametroDeMetodoEstatico),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], UmaPessoa, "metodoEstatico", null);
__decorate([
    decoradorDeGetterESetterEstatico,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], UmaPessoa, "staticPropertyGetterSetter", null);
UmaPessoa = UmaPessoa_1 = __decorate([
    decoradorDeClasse,
    __metadata("design:paramtypes", [String, String, Number])
], UmaPessoa);
exports.UmaPessoa = UmaPessoa;
// Uso da classe
const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
pessoa.nomeCompleto = 'João Silva Oliveira';
const metodo = pessoa.metodo('Olá mundo!');
const metodoEstatico = UmaPessoa.metodoEstatico('Olá mundo!');
console.log(pessoa);
console.log(metodo);
console.log(metodoEstatico);
console.log(UmaPessoa.propriedadeEstatica);
