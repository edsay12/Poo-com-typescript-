import { Car, Vehicle } from './Car';

export abstract class VehicleFactory {
  abstract getVeicle(VehicleName: string): Vehicle; // factory method
}

class NewCar implements VehicleFactory {
  // imprementa o factory method
  getVeicle(VehicleName: string): Vehicle {
    return new Car(VehicleName);
  }
}

const newcar = new NewCar();
const fusca = newcar.getVeicle('Fusca');

console.log(fusca);

fusca.pickup('Edvan');
