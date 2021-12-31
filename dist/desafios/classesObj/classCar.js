"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classVehicle_1 = __importDefault(require("./classVehicle"));
class Car extends classVehicle_1.default {
    constructor(model, year, doors, maxSpeed = 200, currSpeed = 0) {
        super(model, year, doors);
        this.model = model;
        this.year = year;
        this.doors = doors;
        this.maxSpeed = maxSpeed;
        this.currSpeed = currSpeed;
    }
}
exports.default = Car;
