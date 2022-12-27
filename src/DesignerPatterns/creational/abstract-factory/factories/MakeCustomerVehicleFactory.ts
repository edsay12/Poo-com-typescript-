import { vehicle } from '../interfaces/vehicle';
import { customer } from '../interfaces/customer';

export type MakeCustomerVehicle = {
  createCustomer(customerName: string): customer;
  createVehicle(carName: string, customerName: string): vehicle;
};
