"use strict";
// Usa o typeOf pra validar com erteza os parametros
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    return 'uepaaaaa';
}
console.log(add(1, 1));
