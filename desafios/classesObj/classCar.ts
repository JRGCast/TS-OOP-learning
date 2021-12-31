import Vehicle from "./classVehicle";

export default class Car extends Vehicle {
  private doors: number;
  constructor(model: string, year: number, doors: number, maxSpeed: number = 200, currSpeed: number = 0) {
    super(model, year, doors)
    this.model = model;
    this.year = year;
    this.doors = doors;
    this.maxSpeed = maxSpeed;
    this.currSpeed = currSpeed;
  }
}
