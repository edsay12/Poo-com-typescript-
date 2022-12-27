interface Prototype {
  clone(): Prototype;
}

class Person implements Prototype {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
  ) {}

  clone(): this {
    const personCloner = Object.create(this);
    return personCloner;
  }
}

const person = new Person('Edvan', 'Araujo', 21);
const person2 = person.clone();
console.log(person2.firstName);
