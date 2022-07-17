export abstract class Pessoa {
  public nome: string;
  public sobrenome: string;
  private idade: number;
  protected cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  public getIdade() {
    return this.idade;
  }
  public getNomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
  public getCpf() {
    return this.cpf;
  }
}

// usando o super

export class Aluno extends Pessoa {
  public matricula: string;
  constructor(
    matricula: string,
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.matricula = matricula;
  }
}

const aluno = new Aluno('0011002', 'lucas', 'silva', 21, '134.223.332-56');

console.log(aluno);

//Get e seter em ts
