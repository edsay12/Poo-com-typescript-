export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  public static getInstance(): MyDatabaseClassic | null {
    if (this.instance === 'null') {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic.instance;
  }
}

const b1 = MyDatabaseClassic.getInstance();
const b2 = MyDatabaseClassic.getInstance();

console.log(b1 === b2);
