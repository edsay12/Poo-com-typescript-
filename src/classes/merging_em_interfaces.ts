// interfaces com nomes iguais são unidas automaticamentes
interface Pessoa {
  readonly nome?: string; // nome e opcional
}

interface Pessoa {
  readonly sobrenome: string;
}

const pessoa1: Pessoa = {
  sobrenome: 'silva',
};
