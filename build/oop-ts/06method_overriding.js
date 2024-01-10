"use strict";
class Hewan7 {
    constructor() {
        this.nama = '';
    }
    bernafas() {
        console.log('nafas');
    }
}
class Katak7 extends Hewan7 {
    bernafas() {
        console.log('malas');
    }
}
const katak7 = new Katak7();
katak7.bernafas();
