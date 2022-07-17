type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa5 = TemNome & TemIdade & TemSobrenome;

const pessoa5: Pessoa5 = {
  idade: 21,
  nome: 'edsay',
  sobrenome: 'edvan',
};
console.log(pessoa5);
