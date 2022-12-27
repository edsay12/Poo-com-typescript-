import { customer } from '../interfaces/customer';
import { vehicle } from '../interfaces/vehicle';

export class individualCar implements vehicle {
  constructor(public name: string, private readonly customer: customer) {}

  pickUp(): void {
    console.log(`${this.name} Esta buscando um ${this.customer.name}`);
  }
}
