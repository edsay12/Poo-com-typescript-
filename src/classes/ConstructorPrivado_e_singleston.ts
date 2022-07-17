//singleton Gof
export class Database {
  private static database: Database;
  private constructor(
    // construtor privado nao pode se usar o new mais(fora da classe e clasro) ksksk
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect() {
    console.log(`Conectado : ${this.host},${this.user},${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return this.database;
    Database.database = new Database(host, user, password);
    return this.database;
  }
}
// ele nao permite criar 2 objetos nesse caso so o primeiro objeto criado que vai ficar
const database = Database.getDatabase('localhost', 'root', '123');
const database2 = Database.getDatabase('localhost2', 'root2', '12322');
console.log(database.connect());
