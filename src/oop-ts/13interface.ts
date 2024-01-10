interface AndroidPhone {
    name: string;
    menu(): void;
    home(): void;
    back(): void;
}

class Samsung implements AndroidPhone {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    menu(): void {
        console.log('menu tapped');
    }
    home(): void {
        console.log('home tapped');
    }
    back(): void {
        console.log('back tapped');
    }
}

class Dell implements AndroidPhone {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    menu(): void {
        console.log('menu tapped');
    }
    home(): void {
        console.log('home tapped');
    }
    back(): void {
        console.log('back tapped');
    }
}

class GameA {
    private phone: AndroidPhone;

    constructor(phone: AndroidPhone) {
        this.phone = phone;
    }

    back() {
        console.log('kembali ke menu utama')
    }

    menu(){
        this.phone.menu();
    }

    home() {
        this.phone.home();
    }
}

const samsung = new Samsung('type A');

const game = new GameA(samsung);
game.home();
game.back();
game.menu();

//----------

interface ApplePhone {
    home(): void;
}

class IPhone implements ApplePhone{
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    home() {
        console.log('muncul global');
    }
}


const iphone = new IPhone('IPhone Xr');
const Game2 = new GameA(iphone)
