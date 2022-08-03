// export class Pessoa<T, U> {
//   constructor(public nome: T, public idade: U) {}
// }

// const pessoa = new Pessoa('edvan', 21);

// estrutura de dados pilha

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T) {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }
  isEmpty() {
    return this.contador === 0;
  }
  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }
  tamanho(): number {
    return this.contador;
  }
  mostrarPilha(): void {
    console.log(this.elementos);
  }
}

const pilha = new Pilha();
pilha.push('vaca');
pilha.push('gato');
pilha.push('cachorro');
pilha.pop();
pilha.mostrarPilha();
