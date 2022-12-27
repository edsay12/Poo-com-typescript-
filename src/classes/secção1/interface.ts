interface TipoPessoa {
  // interface
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}
interface cpf {
  cpf: string;
}

type pessoaFisica = TipoPessoa & cpf;

// usa a palavre implements inves de extends se colocar , podem ser infinitos tipos
// uma interfaçe pode extender outras interfaces
// interface PessoaFisica extends TipoPessoa, cpf {}

export class Pessoa implements pessoaFisica {
  constructor(
    public nome: string,
    public sobrenome: string,
    public cpf: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}
