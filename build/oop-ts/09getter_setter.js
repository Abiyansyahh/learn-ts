"use strict";
class ProductA {
    constructor() {
        this._price = 0;
        this.discount = 0.05;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value - (value = this.discount);
    }
}
const productA = new ProductA();
productA.price = 2000;
console.log(productA.price);
