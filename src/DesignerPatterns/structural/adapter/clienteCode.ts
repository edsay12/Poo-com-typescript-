//Exemplo usando um validador de email

import { EmailValidatorAdapter } from './emailValidatorAdapter';
import { EmailValidatorProtocol } from './emailValidatorProtocol';

function validaEmail(
  emailValidatorAdapter: EmailValidatorProtocol,
  email: string,
) {
  if (emailValidatorAdapter.isEmail(email)) {
    return true;
  } else {
    return false;
  }
}

const isValid = validaEmail(
  new EmailValidatorAdapter(),
  'edvandearaujo2@gmail.com',
);

console.log(isValid);
