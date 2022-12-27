export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrão = '000.000.000.-00 ';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    private cpf: string,
  ) {}
  // um mero estatico so pode ser acessado pela propria class nao pela estancia da class
  static falaOi() {
    console.log('oi');
  }
  // e possivei criar um novo o objeto aqui tb
  static criaPessoa(nome: string, sobrenome: string) {
    return new Pessoa(nome, sobrenome, this.idadePadrao, this.cpfPadrão);
  }
}

const pessoa = new Pessoa('edvan', 'silva', 21, '134.898.074.56');

// criando um objeto com o metodo estatico
const pessoa2 = Pessoa.criaPessoa('edvan', 'araujo');

// ex;
//const pessoa = new Pessoa('edvan', 'silva', 21, '134.898.074.56');
// pessoa.falaOi(); // isso nao funciona pois e ums estancia da classe

// Pessoa.falaOi(); // isso funciona pois e a pripria classe que esta chamando o metodo
