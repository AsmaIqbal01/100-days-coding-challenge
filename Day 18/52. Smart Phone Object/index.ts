/*Make a Smartphone Object: Create a simple way to keep track of a smartphones details.
 Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.*/
// interface just are blueprinta 
interface smartPhone{
    brand:string;  //holds company name
    model:string;  //model comprises of characters and numbers 
    storage:number; //in gb
    screenSize:number; //in inches
    batteryLast:number;  //in hours
} 
//to get an access to interface, we use class or objects.here used objects
const mySmartPhone: smartPhone={
    brand: "Samsung",
    model: "Galaxy S21",
    storage: 128,
    screenSize: 6.2,
    batteryLast: 10
}
//used for another smartphone having same specifications.
const mySmartPhone2: smartPhone={
    brand: "Apple",
    model: "iPhone 12",
    storage: 256,
    screenSize: 6.1,
    batteryLast: 8
}
//logging details to console
console.log(mySmartPhone,mySmartPhone2);