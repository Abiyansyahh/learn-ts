interface Product {
    sell(): void;
}

class CarProduct implements Product {
    sell(): void {
        console.log('jual mobil');
    }
}

class MotorProduct implements Product{
    sell(): void{
        console.log('jual motor');
    }
}

function sellProduct<T extends Product>(products: T[]): void {
    products.forEach(product => product.sell())
}

const mobil = new CarProduct();
const pit = new MotorProduct();

sellProduct([mobil, pit]);