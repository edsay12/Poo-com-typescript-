import { vehicle } from '../interfaces/vehicle';
import { customer } from '../interfaces/customer';
import { MakeCustomerVehicle } from './MakeCustomerVehicleFactory';
import { IndividualCustomer } from '../customer/individualCustomer';
import { individualCar } from '../vehicle/individualCar';

export class individualCustomerVehicleFactory implements MakeCustomerVehicle {
  createCustomer(customerName: string): customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(carName: string, customerName: string): vehicle {
    const customer = this.createCustomer(customerName);
    return new individualCar(carName, customer);
  }
}
