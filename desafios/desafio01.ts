// Crie a dinâmica de uma concessionária que vende um carro para alguém

class Car {
  private model: string;
  private year: number;
  private doors: number;
  private maxSpeed: number;
  private currSpeed: number = 0;
  constructor(model: string, year: number, doors: number = 2, maxSpeed: number = 200, currSpeed: number = 0) {
    this.model = model;
    this.year = year;
    this.doors = doors;
    this.maxSpeed = maxSpeed;
    this.currSpeed = currSpeed;
  }
  public accelerate(): void {
    this.currSpeed += 10;
  }
  public deaccelerate(): void {
    this.currSpeed -= 10;
  }
  public getCurrSpeed(): number {
    return this.currSpeed;
  }
}

let carrA = new Car('Corsa', 2000)
console.log(carrA)
carrA.accelerate() // 10
carrA.accelerate() // 20
carrA.accelerate() // 30
carrA.accelerate() // 40
console.log(carrA)


class Concessionarie {
  private address: string
  private carList: any //poderá receber qualquer dado

  constructor(address: string) {
    this.address = address
  }

  public showAddress(): string {
    return this.address
  }

  public showCarList(): any {
    return this.carList
  }
}

class Person {
  private name: string;
  private age: number;
  private preferredCar: string;
  private currCar: any;
  constructor(name: string, age: number, preferredCar: string, currCar: any) {
    this.name = name;
    this.age = age;
    this.preferredCar = preferredCar;
    this.currCar = currCar;
  }
  sayName(): string {
   return (`My name is ${ this.name }`)
  }
  sayPreferredCar(): string {
   return (`My prefered car is ${ this.preferredCar }`)
  }
  sayCurrCar(): string {
   return (`My current car is ${ this.currCar }`)
  }
  buyCar(car: any = ''): string {
   return car !== '' ? `I bought a new car! It's ${ car }` : 'Did not bought'
  }
}

let person1 = new Person('John', 29, 'Veloster', 'Fox')
console.log(person1.sayName(), person1.sayCurrCar(), person1.sayPreferredCar(), person1.buyCar('Golf'))