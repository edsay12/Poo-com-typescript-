import { Customer, CustomerJuridico } from './intefaces/CustomerProtocol';

// export class CustomerFisico implements Customer {
//   firstName: string;
//   lastName: string;
//   cpf: string;
//   cnpj: string;

//   constructor(firstName: string, lastName: string, cpf: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.cpf = cpf;
//     // isso estaria quebrando esse principio
//   }
// }
// export class CustomerFisicoJuridico implements Customer {
//   firstName: string;
//   lastName: string;
//   cpf: string;
//   cnpj: string;
//   constructor(firstName: string, lastName: string, cnpj: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.cpf = cpf; // Isso quebraria o principio
//     this.cnpj = cnpj;
//   }
// }

export class cliente implements Customer {
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string,
  ) {}
}

export class clientEmpresa implements CustomerJuridico {
  constructor(public name: string, public cnpj: string) {}
}

// uma hora nos iremos ter que convergir os 2
// Mais isso e para outro dia
// falta um principio mais esse e muito easy
// nenhuma classe deve depender de outra classe e sim de um item abstrato seja ele um type uma interface etc.
