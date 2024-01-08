function getData(value: any){
    return value;
}

console.log(getData("biyansyah").length);
console.log(getData(123).length);

//Generic
function myData<T>(value: T) {
    return value
}
console.log(myData("biyansyah").length);
console.log(myData(123));

const arrowfunc = <T, >(value: T) => {

}