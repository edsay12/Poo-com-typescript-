// Usando classes com typescript

export class Empresa {
  public readonly nome: string; // nao podemos nunca alterar seu valor por conta do readonly
  private readonly colaboradores: Colaborador[] = []; // uma classe em typescript tambem eum tipo :)
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '71.580.684/0001-96');
const colaborador1 = new Colaborador('edvan', 'araujo');
const colaborador2 = new Colaborador('lucio', 'araujo');
const colaborador3 = new Colaborador('joaquin', 'araujo');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
