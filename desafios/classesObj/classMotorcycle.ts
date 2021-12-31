import Vehicle from "./classVehicle";

export default class MotorCycle extends Vehicle {
  constructor(model: string, year: number, maxSpeed: number = 200, currSpeed: number = 0) {
    super(model, year)
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.currSpeed = currSpeed;
  }
  // Digamos que a moto, por ser mais leve, acelera mais rapidamente.
  // É possível sobrescrever um método herdado pela classe pai, bastando apenas reescrevê-lo:
  public accelerate() {
    this.currSpeed += 30;
  }
}
