export abstract class Personagem {
  constructor(
    protected name: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem) {
    console.log(`${this.name} esta atacando`);
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forçaAtaque: number) {
    this.vida -= forçaAtaque;
    console.log(
      this.name,
      'Esta sendo atacado ',
      'Agora tem :',
      this.vida,
      ' ',
      'de vida',
    );
  }
  abstract bordao(): void;
}

class Guerreira extends Personagem {
  bordao(): void {
    console.log('Espadada');
  }
}
class Mago extends Personagem {
  bordao(): void {
    console.log('Bola de fogo');
  }
}

const guerreira = new Guerreira('avalote', 500, 1500);
const mago = new Mago('Tyling', 1000, 500);

mago.atacar(guerreira);
guerreira.atacar(mago);
