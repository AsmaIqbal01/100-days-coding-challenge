/*Compare let and const:
Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.*/
var fname = "John";
console.log("First time assign:", fname);
//let name:string = "Jane";
// This will throw an error because let allows reassignment of a variable.
//we can update variable asigned by using let keyword before
fname = "Jane";
console.log("Second time assign:", fname);
//const keyword
var personName = "John";
console.log("First time assign:", personName);
//const personName = "Jane";
// this will throw an error because const does not allow reassignment of a variable.
// personName = "Jane";
// this will throw an error because const does not allow reassignment of a variable.
//we can update variable asigned by using const keyword before
