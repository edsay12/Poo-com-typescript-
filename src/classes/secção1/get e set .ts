export class Pessoa {
  private nome: string;
  private sobrenome: string;
  private idade: number;
  private _cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this._cpf = cpf;
  }

  public get cpf() {
    return this._cpf.replace(/\D/g, '');
  }

  public set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const pessoa = new Pessoa('edvan', 'silva', 21, '134.898.074.56');
console.log((pessoa.cpf = '111.222.334-22'));
console.log(pessoa.cpf);
