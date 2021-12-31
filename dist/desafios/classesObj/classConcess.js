"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concessionarie {
    constructor(address, carList, businessTime) {
        this.address = address;
        this.carList = carList;
        this.businessTime = businessTime;
    }
    showAddress() {
        return this.address;
    }
    showCarList() {
        return this.carList;
    }
    showBusinessTime() {
        return 'Das 8h às 19h';
    }
}
exports.default = Concessionarie;
