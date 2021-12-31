"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(model, year, maxSpeed = 200, currSpeed = 0) {
        this.currSpeed = 0;
        this.model = model;
        this.year = year;
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
exports.default = Vehicle;
