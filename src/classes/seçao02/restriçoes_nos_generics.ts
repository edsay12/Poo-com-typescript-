type ObterChaveFn = <O, K extends keyof O>(object: O, chave: K) => O[K];
// aqui eu digo que o K e uma key do objeto O
// NESSE CASO O SIGNIFICADO E DIFERENTE ELE DIZ QUE
// O K E NO MAXIMO UMA CHAVE DE  O
const obterChaveFn: ObterChaveFn = (object, key) => object[key];

console.log(obterChaveFn({ nome: 'edvan', idade: '21' }, 'idade'));
