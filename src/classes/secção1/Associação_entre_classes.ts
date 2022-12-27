// Associação entre Classes O tipo mais comum de relacionamento em UML,
//uma associação define que os objetos de uma classe são conectados a objetos d
//e outra classe. Sem essa associação nenhuma mensagem pode passar entre
//objetos da classe em tempo de execução.

// e uma relação do tipo tem 1 ou seja o escritor possue uma ferramenta
// mais ambos nao dependem uma da outra

export class Excritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome() {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(this.nome, ' ', 'escrevendo');
  }
}

export class Maquina extends Ferramenta {
  escrever(): void {
    console.log(this.nome, '', 'Digitando');
  }
}

const escritor = new Excritor('Fabio');

const caneta = new Caneta('big');
escritor.ferramenta = caneta;

console.log(escritor);
