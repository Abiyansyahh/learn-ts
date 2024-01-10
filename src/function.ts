//tipedata pada balikan function

function getName(): string {
    return "hello, my name is biyansyah";
}
console.log(getName());

function getAge(): number{
    return 123;
}

function printName(): void{
    console.log("Print name");
}
printName();

function multiply(val1: number, val2: number): number{
    return val1 * val2;
}

const result = multiply(3, 5);
console.log(result);


//function as type
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}

//default parameter
const fullname = (first: string, last: string = "irawan"): string => {
    return first + " " + last;
}
console.log(fullname("sumanto"));

//optional parameter
const getUmur = (val1: number, val2: number): number => {
    return val1 + val2;
   // return val1 + " " + val2;
}

console.log(getUmur(1, 22));