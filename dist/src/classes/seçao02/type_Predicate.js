"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soma = exports.isNumber = void 0;
function isNumber(value) {
    // predicado numero is number = Aqui ele diz que o value e retornara um numero
    // caso o retorno seja true
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function soma(...args) {
    const retorno = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);
    return retorno;
}
exports.soma = soma;
console.log(soma(...[1, 2, 3, 3, 1, 't']));
