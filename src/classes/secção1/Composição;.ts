//

class Carro {
  private motor = new Motor();

  ligar() {
    this.motor.ligar();
  }

  parar() {
    this.motor.parar();
  }

  acelerar() {
    this.motor.acelerar();
  }
}

class Motor {
  ligar() {
    console.log('motor Ligando ....');
  }

  parar() {
    console.log('motor parando ....');
  }

  acelerar() {
    console.log('motor acelerandooo ....');
  }
}

const carro = new Carro();

carro.ligar();
