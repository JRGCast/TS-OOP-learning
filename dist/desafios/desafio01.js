"use strict";
// Crie a dinâmica de uma concessionária que vende um carro para alguém
class Car {
    constructor(model, year, doors = 2, maxSpeed = 200, currSpeed = 0) {
        this.currSpeed = 0;
        this.model = model;
        this.year = year;
        this.doors = doors;
        this.maxSpeed = maxSpeed;
        this.currSpeed = currSpeed;
    }
    accelerate() {
        this.currSpeed += 10;
    }
    deaccelerate() {
        this.currSpeed -= 10;
    }
    getCurrSpeed() {
        return this.currSpeed;
    }
}
let carrA = new Car('Corsa', 2000);
console.log(carrA);
carrA.accelerate(); // 10
carrA.accelerate(); // 20
carrA.accelerate(); // 30
carrA.accelerate(); // 40
console.log(carrA);
class Concessionarie {
    constructor(address) {
        this.address = address;
    }
    showAddress() {
        return this.address;
    }
    showCarList() {
        return this.carList;
    }
}
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
        return (`My current car is ${this.currCar}`);
    }
    buyCar(car = '') {
        return car !== '' ? `I bought a new car! It's ${car}` : 'Did not bought';
    }
}
let person1 = new Person('John', 29, 'Veloster', 'Fox');
console.log(person1.sayName(), person1.sayCurrCar(), person1.sayPreferredCar(), person1.buyCar('Golf'));
