import Car from './classCar'
import { ConcessInterface } from '../Interfaces/ConcessInterface'

export default class Concessionarie implements ConcessInterface {
  private address: string
  private carList: Array<Car>
  private businessTime: string

  constructor(address: string, carList: Array<Car>, businessTime: string) {
    this.address = address
    this.carList = carList
    this.businessTime = businessTime
  }

  public showAddress(): string {
    return this.address
  }

  public showCarList(): Array<Car> {
    return this.carList
  }

  public showBusinessTime(): string {
    return 'Das 8h às 19h'
  }
}