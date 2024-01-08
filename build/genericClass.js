"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
//let numbers = new List<number>(1, 2, 3);
let random = new List(1, "a", "b", 2);
random.add("dfsa");
random.add(898);
random.addMultiple(321, "wq");
console.log(random.getAll());
