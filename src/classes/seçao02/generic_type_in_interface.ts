// e possovero usar tipos genericos em interfaces
interface PessoaProtocolo<T, B> {
  nome: T;
  sobrenome: T;
  idade: B;
}
const aluno: PessoaProtocolo<string, number> = {
  nome: 'edvan',
  sobrenome: 'silva',
  idade: 21,
};
