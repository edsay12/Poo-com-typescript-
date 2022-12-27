type TipoPessoa = {
  // interface
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};
type cpf = {
  cpf: string;
};
// usa a palavre implements inves de extends se colocar , podem ser infinitos tipos
export class Pessoa implements TipoPessoa, cpf {
  constructor(
    public nome: string,
    public sobrenome: string,
    public cpf: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}
