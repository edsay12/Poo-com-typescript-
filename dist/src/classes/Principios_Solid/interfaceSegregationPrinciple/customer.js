"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientEmpresa = exports.cliente = void 0;
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
class cliente {
    constructor(firstName, lastName, cpf) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
    }
}
exports.cliente = cliente;
class clientEmpresa {
    constructor(name, cnpj) {
        this.name = name;
        this.cnpj = cnpj;
    }
}
exports.clientEmpresa = clientEmpresa;
// uma hora nos iremos ter que convergir os 2
// Mais isso e para outro dia
// falta um principio mais esse e muito easy
// nenhuma classe deve depender de outra classe e sim de um item abstrato seja ele um type uma interface etc.
