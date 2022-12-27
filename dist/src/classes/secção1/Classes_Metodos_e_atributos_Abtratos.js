"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(name, ataque, vida) {
        this.name = name;
        this.ataque = ataque;
        this.vida = vida;
    }
    atacar(personagem) {
        console.log(`${this.name} esta atacando`);
        this.bordao();
        personagem.perderVida(this.ataque);
    }
    perderVida(forçaAtaque) {
        this.vida -= forçaAtaque;
        console.log(this.name, 'Esta sendo atacado ', 'Agora tem :', this.vida, ' ', 'de vida');
    }
}
exports.Personagem = Personagem;
class Guerreira extends Personagem {
    bordao() {
        console.log('Espadada');
    }
}
class Mago extends Personagem {
    bordao() {
        console.log('Bola de fogo');
    }
}
const guerreira = new Guerreira('avalote', 500, 1500);
const mago = new Mago('Tyling', 1000, 500);
mago.atacar(guerreira);
guerreira.atacar(mago);
