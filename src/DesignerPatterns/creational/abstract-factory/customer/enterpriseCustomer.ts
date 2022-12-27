import { customer } from '../interfaces/customer';

export class EnterpriseCustomer implements customer {
  constructor(public name: string) {}
}
