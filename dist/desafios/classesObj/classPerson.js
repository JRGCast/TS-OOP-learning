"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, preferredCar, currCar) {
        this.name = name;
        this.age = age;
        this.preferredCar = preferredCar;
        this.currCar = currCar;
    }
    sayName() {
        return (`My name is ${this.name}`);
    }
    sayPreferredCar() {
        return (`My prefered car is ${this.preferredCar}`);
    }
    sayCurrCar() {
        return (`My current car is ${JSON.stringify(this.currCar)}`);
    }
    buyCar(car = '') {
        this.currCar = car;
        return car !== '' ? `I bought a new car! It's ${JSON.stringify(car)}` : 'Did not bought';
    }
}
exports.default = Person;
