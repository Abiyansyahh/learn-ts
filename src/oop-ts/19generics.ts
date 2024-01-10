function getData(value: any) {
    return value;
}

const data1 = getData(12321);
console.log(data1);

//------
function getData2<T>(value: T): T {
    return value;
}

const data = getData2<string>("test");
console.log(data1.length)

const data21 = getData2<number>(12321);
console.log(data21.toFixed(2));