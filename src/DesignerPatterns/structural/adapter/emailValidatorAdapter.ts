import { EmailValidatorProtocol } from './emailValidatorProtocol'; //codido extrerno
import isEmail from 'validator/lib/isEmail';

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}
