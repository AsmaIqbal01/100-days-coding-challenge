/*Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations
 (addition, subtraction, multiplication, division) on x using compound operators.*/
 let x=4;
 //Compound assignment operators combine an arithmetic operation with assignment, Instead of writing x = x + 2, you can simply write x += 2.
console.log("Initial value of x:", x);
 function compoundAssignmentOperations() {
    x += 2; // Equivalent to x = x + 2
    console.log("After x += 2, x =", x);

    x -= 4; // Equivalent to x = x - 4
    console.log("After x -= 4, x =", x);

    x *= 2; // Equivalent to x = x * 2
    console.log("After x *= 2, x =", x);

    x /= 4; // Equivalent to x = x / 4
    console.log("After x /= 4, x =", x);
 }
 compoundAssignmentOperations();