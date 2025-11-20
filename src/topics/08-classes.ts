export class Person {
  // public name: string;
  // private address: string;

  // Esta es la forma mas corta para definir una clase en TypeScript
  constructor(
    public firstName: string,
    public lastName: string,
    private address: string
  ) {
    // this.name = name;
    // this.address = address;
  }
}

//export class Hero extends Person {
// constructor(
//  public alterEgo: string,
//  public age: number,
//  public realName: string
// ) {
// }
//}

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //  this.person = new Person(realName, "New York");
  }
}

const spriderma = new Person("Peter", "Parker", "New York");
const ironman = new Hero("Ironman", 45, "Tony Stark", spriderma);
console.log(ironman);
