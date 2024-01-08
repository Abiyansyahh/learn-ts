export class User {
    name: string;

    constructor(name: string, public age: number) {
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => {
        return this.name;
    }
}

//let user = new User("Abiyansyah", 17);
//console.log(user);

//public = bisa diakses disemua class
//protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
//private = hanya bisa diakses dari class itu sendiri

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";

    constructor(phone: string, name: string, age: number){
        super(name, age);
        this.phone = phone
    }

    static getNameRole() {
        return "hello";
    }

    getRole(): { read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        };
    };
    set email(value: string)  {
        if(value.length < 10) {
            this._email = "Email salah";
    } else {
        this._email = value;
    }
}

    get email(): string {
        return this._email;
    }
    
}
let admin = Admin.getNameRole();
console.log(admin);