"use strict";
//tipedata pada balikan function
function getName() {
    return "hello, my name is biyansyah";
}
console.log(getName());
function getAge() {
    return 123;
}
function printName() {
    console.log("Print name");
}
printName();
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(3, 5);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
//default parameter
const fullname = (first, last = "irawan") => {
    return first + " " + last;
};
console.log(fullname("sumanto"));
//optional parameter
const getUmur = (val1, val2) => {
    return val1 + val2;
    // return val1 + " " + val2;
};
console.log(getUmur(1, 22));
