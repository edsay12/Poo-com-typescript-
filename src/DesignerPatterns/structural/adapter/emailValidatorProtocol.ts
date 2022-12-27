// sera um interface que fala que algo(biblioteca externa) precisa validar o email

export interface EmailValidatorProtocol {
  isEmail(value: string): boolean;
}
