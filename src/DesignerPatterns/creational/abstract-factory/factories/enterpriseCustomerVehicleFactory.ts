import { vehicle } from '../interfaces/vehicle';
import { EnterpriseCustomer } from '../customer/enterpriseCustomer';
import { customer } from '../interfaces/customer';
import { EnterpriseCar } from '../vehicle/enterpriseCar';
import { MakeCustomerVehicle } from './MakeCustomerVehicleFactory';

export class EnterpriseCustomerVehicleFactory implements MakeCustomerVehicle {
  createCustomer(customerName: string): customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(carName: string, customerName: string): vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(carName, customer);
  }
}
