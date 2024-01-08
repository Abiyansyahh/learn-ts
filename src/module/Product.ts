import Asus from "./Asus";
import MacBook from "./MacBook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);

let macbook = new MacBook(2020, false, false);
console.log(macbook);
macbook.a();
macbook.b();