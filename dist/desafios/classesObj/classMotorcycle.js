"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classVehicle_1 = __importDefault(require("./classVehicle"));
class MotorCycle extends classVehicle_1.default {
    constructor(model, year, maxSpeed = 200, currSpeed = 0) {
        super(model, year);
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.currSpeed = currSpeed;
    }
    // Digamos que a moto, por ser mais leve, acelera mais rapidamente.
    // É possível sobrescrever um método herdado pela classe pai, bastando apenas reescrevê-lo:
    accelerate() {
        this.currSpeed += 30;
    }
}
exports.default = MotorCycle;
