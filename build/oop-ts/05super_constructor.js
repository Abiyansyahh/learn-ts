"use strict";
class Hewan6 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
class Katak1 extends Hewan6 {
    constructor(nama, kaki, beracun) {
        super(nama, kaki);
        this.beracun = beracun;
    }
}
const katak1 = new Katak1('katak', 4, false);
console.log(katak1);
