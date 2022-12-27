"use strict";
// aqui eu digo que o K e uma key do objeto O
// NESSE CASO O SIGNIFICADO E DIFERENTE ELE DIZ QUE
// O K E NO MAXIMO UMA CHAVE DE  O
const obterChaveFn = (object, key) => object[key];
console.log(obterChaveFn({ nome: 'edvan', idade: '21' }, 'idade'));
