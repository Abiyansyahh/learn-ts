class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

interface IShark extends Animal {
    swim(): void;
}

class IShark implements IShark {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    swin(): void {
        console.log('berenang');
    }
}