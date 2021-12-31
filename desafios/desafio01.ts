// Crie a dinâmica de uma concessionária que vende um carro para alguém
import { Car, Person, Concessionarie } from './classesObj'
import MotorCycle from './classesObj/classMotorcycle'

const separateRows = () => console.log('------------------')

// 1- Criando carros:
let carrA = new Car('Corsa', 2000, 2, 180)
let carrB = new Car('Veloster', 2015, 4, 250)
let carrC = new Car('Parati', 1999, 4, 190)
// console.log(carrA)
// carrA.accelerate() // 10
// carrA.accelerate() // 20
// carrA.accelerate() // 30
// carrA.accelerate() // 40
// console.log(carrA)

// 2- Montar lista de carros da concessionária: 
let carList1: Array<Car> /* também poderia ser Car[]*/ = [carrA, carrB, carrC]

// 3- Instanciando concessionária:
let concess1 = new Concessionarie('Rua Mocotó, KM 745', carList1, 'Segunda a Sexta, das 8h às 18h')
console.log(concess1.showBusinessTime())
separateRows()
// 4- Mostrando a lista de carros:
console.log(concess1.showCarList())
separateRows()
// 5- Instanciando um cliente:
let person1 = new Person('John', 29, 'Veloster', 'Fox')
console.log(person1.sayName())
console.log(person1.sayCurrCar(), person1.sayPreferredCar())
separateRows()
// 6- Verificando se o carro preferido do cliente existe na lista da concessionária:
concess1.showCarList().forEach((car: Car) => {
  if (person1.sayPreferredCar().includes(car['model'])) console.log(person1.buyCar(car));
})
console.log(person1.sayCurrCar())
separateRows()
// 7- Instanciando uma moto
let moto1 = new MotorCycle('Ninja', 2010)
moto1.accelerate()
console.log(moto1)
separateRows()