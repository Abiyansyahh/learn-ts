class Store {
    private name: string = 'Store A';
    private profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class Store2 {
    private name: string = 'Store A';
    private profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class FashionProduct {
    private store:  Store2;
    private name:  string;
    private price:  number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = new Store2();
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}

class TechProduct {
    private store:  Store;
    private name:  string;
    private price:  number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;

        this.store = new Store();
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}


const baju = new FashionProduct('baju lengan panjang', 50000);
baju.sell();

//-------------------------

interface IStore {
    name: string;
    profit: number;
    getProfit(): number; 
}

class TokoA implements IStore{
    name: string = 'Toko A';
    profit: number = 1000;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class TokoB implements IStore{
    name: string = 'Toko B';
    profit: number = 2500;

    getName(): string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class HijabProduct {
    private store:  IStore;
    private name:  string;
    private price:  number;

    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;
        this.store = store;
    }

    sell(): void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}

class FoodProduct {
    private store:  IStore;
    private name:  string;
    private price:  number;

    constructor(store: IStore, name: string, price: number) {
        this.name = name;
        this.price = price;
        this.store = store;
    }

    sell(): void {
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