"use strict";
// Faz meio que uma copia de uma classe depois disso ele faz algo a mais(let's bora)
class Animal {
    constructor(cor) {
        this.cor = cor;
    }
}
function decorator(target) {
    console.log('Decorei tua classe haha');
    return class extends target {
        constructor(...args) {
            super(...args);
            this.cor = args[0].split('').reverse().join('', ',');
        }
    };
}
const AnimalDecorator = decorator(Animal);
const animal = new AnimalDecorator('rosa');
console.log(animal);
