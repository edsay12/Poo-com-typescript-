"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
//singleton Gof
class Database {
    constructor(
    // construtor privado nao pode se usar o new mais(fora da classe e clasro) ksksk
    host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    connect() {
        console.log(`Conectado : ${this.host},${this.user},${this.password}`);
    }
    static getDatabase(host, user, password) {
        if (Database.database)
            return this.database;
        Database.database = new Database(host, user, password);
        return this.database;
    }
}
exports.Database = Database;
// ele nao permite criar 2 objetos nesse caso so o primeiro objeto criado que vai ficar
const database = Database.getDatabase('localhost', 'root', '123');
const database2 = Database.getDatabase('localhost2', 'root2', '12322');
console.log(database.connect());
