import Car from './classCar'
export default class Person {
  private name: string;
  private age: number;
  private preferredCar: string;
  private currCar: string | Car;
  constructor(name: string, age: number, preferredCar: string, currCar: string | Car) {
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
    return (`My current car is ${ JSON.stringify(this.currCar) }`)
  }
  buyCar(car: string | Car = ''): string {
    this.currCar = car;
    return car !== '' ? `I bought a new car! It's ${ JSON.stringify(car) }` : 'Did not bought'
  }
}
