export default class Vehicle {
  protected model: string; // com o atributo de visibilidade 'protected', torna-se possível que as classes filhas modifiquem o atributo herdado
  protected year: number;
  protected maxSpeed: number;
  protected currSpeed: number = 0;
  constructor(model: string, year: number, maxSpeed: number = 200, currSpeed: number = 0) {
    this.model = model;
    this.year = year;
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