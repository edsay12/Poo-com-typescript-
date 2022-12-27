import { customer } from '../interfaces/customer';

export class IndividualCustomer implements customer {
  constructor(public name: string) {}
}
