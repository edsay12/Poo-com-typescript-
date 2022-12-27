import { EnterpriseCustomerVehicleFactory } from './factories/enterpriseCustomerVehicleFactory';
import { individualCustomerVehicleFactory } from './factories/individualCustomerVehicleFactory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new individualCustomerVehicleFactory();

const entrerpriseCrient = enterpriseFactory.createCustomer('Edvan');
const enterPrisecar = enterpriseFactory.createVehicle('João', 'edvan');

const individualClient = individualFactory.createCustomer('Lucas');
