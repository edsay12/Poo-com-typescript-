const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

// typeof pega o tipo de forma dinamica
// ja o keyof pega os itens do objeto
function traduzirCor(cor: CoresChaves, cores: typeof coresObj) {
  return cores[cor];
}
