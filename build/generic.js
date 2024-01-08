"use strict";
function getData(value) {
    return value;
}
console.log(getData("biyansyah").length);
console.log(getData(123).length);
//Generic
function myData(value) {
    return value;
}
console.log(myData("biyansyah").length);
console.log(myData(123));
const arrowfunc = (value) => {
};
