"use strict";
class CarProduct {
    sell() {
        console.log('jual mobil');
    }
}
class MotorProduct {
    sell() {
        console.log('jual motor');
    }
}
function sellProduct(products) {
    products.forEach(product => product.sell());
}
const mobil = new CarProduct();
const pit = new MotorProduct();
sellProduct([mobil, pit]);
