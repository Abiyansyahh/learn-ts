"use strict";
class Hewan12 {
    constructor(name) {
        this.name = name;
    }
    makan() {
        console.log(`${this.name} sedang makan`);
    }
}
class Kucing12 extends Hewan12 {
    constructor() {
        super('kucing');
    }
    bergerak() {
        console.log('kucing berjalan');
    }
}
class Burung12 extends Hewan12 {
    constructor() {
        super('burung');
    }
    bergerak() {
        console.log('burung terbang');
    }
}
const kucing12 = new Kucing12();
kucing12.bergerak();
const burung12 = new Burung12();
burung12.bergerak();
