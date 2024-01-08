//array
let array: number[];
array = [1, 2, 3];

let array2: string[];
array2 = ['string 1', 'string 2'];

let array3: any[];
array3 = [ 1,'string',true, {}, "bibee", "123456", "bibee"];

//tuples
let biodata: [string, number];
biodata = ["Solo", 123]; //ok
biodata = ["Semarang", true]; //error
biodata = ["Boyolali", 100, false]; //error