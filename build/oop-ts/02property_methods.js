"use strict";
class Hewan3 {
    constructor() {
        this.nama = '';
        this.kaki = 0;
        this.mamalia = false;
    }
    bernafas() {
        console.log(`$(this.nama) sedang bernafas`);
    }
}
const hewan3 = new Hewan3();
console.log(hewan3);
hewan3.nama = 'singa';
hewan3.kaki = 4;
console.log(hewan3);
hewan3.bernafas();
