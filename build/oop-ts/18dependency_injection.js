"use strict";
class Store {
    constructor() {
        this.name = 'Store A';
        this.profit = 1000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class Store2 {
    constructor() {
        this.name = 'Store A';
        this.profit = 1000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class FashionProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store2();
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
class TechProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store();
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
const baju = new FashionProduct('baju lengan panjang', 50000);
baju.sell();
class TokoA {
    constructor() {
        this.name = 'Toko A';
        this.profit = 1000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class TokoB {
    constructor() {
        this.name = 'Toko B';
        this.profit = 2500;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class HijabProduct {
    constructor(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
class FoodProduct {
    constructor(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
const TokoLama = new TokoA();
const TokoBaru = new TokoB();
const HijabMahal = new HijabProduct(TokoBaru, 'hijab vip', 90000);
const HijabMahal2 = new HijabProduct(TokoLama, 'hijab vip', 95000);
console.log(HijabMahal);
console.log(HijabMahal2);
HijabMahal.sell();
HijabMahal2.sell();
