"use strict";
// O decorator e um objeto impostor (let's bora)
// para passar valores para um decorator usamos o decorator factory.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
function decoratorFactory(param1, param2) {
    return function (target) {
        console.log('hhello eu sou um decorator');
        return class extends target {
            constructor(...args) {
                super(...args);
                this.cor = 'azul Violeta';
            }
        };
    };
}
let Animal = class Animal {
    constructor(cor) {
        this.cor = cor;
    }
};
Animal = __decorate([
    decoratorFactory('vaca', 'porco'),
    __metadata("design:paramtypes", [String])
], Animal);
exports.Animal = Animal;
// e basicamente uma funçao que recebe uma classe e faz algo antes de me dar a classe novamente
// const AnimalDecorator = decorator(Animal);
const animal = new Animal('roxo');
console.log(animal);
