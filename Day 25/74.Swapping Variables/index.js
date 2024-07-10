/*Swapping Variables: Demonstrate how to swap the values of two variables.
Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.*/
var a = 5;
var b = 10;
console.log("Initial value of a:", a);
console.log("Initial value of b:", b);
var temp = a; // to hold value of a so it can be used for b
a = b; // reassign a with the value of b
b = temp; //reassign b with the original value of a
//logs the swapped value
console.log("After swapping, the value of a is:", a);
console.log("After swapping, the value of b is:", b);
//we can use a function to swap values:
function swapValues() {
    var c = 15;
    var d = 30;
    console.log("Initial value of c:", c);
    console.log("Initial value of d:", d);
    var temp = c;
    c = d;
    d = temp;
    console.log("After swapping, the value of c is:", c);
    console.log("After swapping, the value of d is:", d);
}
swapValues();
