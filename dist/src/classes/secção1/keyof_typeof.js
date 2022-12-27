"use strict";
const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
};
// typeof pega o tipo de forma dinamica
// ja o keyof pega os itens do objeto
function traduzirCor(cor, cores) {
    return cores[cor];
}
