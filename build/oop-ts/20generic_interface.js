"use strict";
function genericsFunction(value) {
    let data = {
        propA: value
    };
    return data;
}
console.log(genericsFunction('fhgsh'));
console.log(genericsFunction(12321));
console.log(genericsFunction(true));
