"use strict";
//functiion generics24<T>(arg: T): T{
//   console.log(arg.length);
function generic24(arg) {
    console.log(arg.length);
    return arg;
}
const generic24a = generic24('eff');
console.log(generic24);
const generics24b = generic24({ length: 10, value: 200 });
