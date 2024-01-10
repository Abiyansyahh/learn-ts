type Name = {
    name: string;
}

type Age = {
    age: number;
}

type Employee1 = Name & Age;
type Employee2 = Name | Age;

const employee: Employee2 = {
    name: 'dasaad',
}

//class implements interface 

//let alfsjnb: type
//function getData(): type