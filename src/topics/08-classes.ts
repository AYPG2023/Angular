export class Person {
  // public name: string;
  // private address: string;

  // Esta es la forma mas corta para definir una clase en TypeScript
  constructor(public name: string, private address: string) {
    // this.name = name;
    // this.address = address;
  }
}

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: string,
    public realName: string
  ) {
    super(name, address);
  }
}

const ironman = new Hero("Anderson", "New York");
console.log(ironman);
