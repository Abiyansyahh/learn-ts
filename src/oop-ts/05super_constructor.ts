class Hewan6 {
    nama: string;
    kaki: number;

    constructor(nama: string, kaki: number) {
        this.nama = nama;
        this.kaki = kaki;
    }
}

class Katak1 extends Hewan6{
    beracun: boolean;

    constructor(nama: string, kaki: number, beracun: boolean) {
        super(nama, kaki);
        this.beracun = beracun;
    }
}

const katak1 = new Katak1('katak', 4, false);
console.log(katak1);