//functiion generics24<T>(arg: T): T{
 //   console.log(arg.length);

 
 interface length {
    length: number;
 }
 function generic24<T extends length>(arg: T): T {
    console.log(arg.length);
    return arg;
 }

 const generic24a = generic24('eff');
 console.log(generic24);

 const generics24b = generic24({length: 10, value: 200});