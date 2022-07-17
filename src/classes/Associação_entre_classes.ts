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
