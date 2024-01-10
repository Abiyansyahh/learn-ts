"use strict";
class Hewan5 {
    constructor() {
        this.nama = '';
        this.kaki = 0;
    }
    bernafas() {
        console.log('nafas');
    }
}
class Burung5 extends Hewan5 {
    constructor() {
        super(...arguments);
        this.warna = 'merah';
    }
}
const burung5 = new Burung5();
burung5.nama = 'jalak';
burung5.kaki = 2;
burung5.warna = 'hitam';
console.log(burung5);
burung5.bernafas();
