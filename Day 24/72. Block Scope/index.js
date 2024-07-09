/*Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const.
Show how variables declared inside the block are not accessible outside of it.*/
function demonstrateBlockScope() {
    // Block scope with let and const
    {
        var x = "Const Variable";
        var y = "let variable";
        console.log(x); // Output: "const variable"
        console.log(y); // Output: "let variable"
    }
    // Accessing outside the block
    // console.log(x); // Output: ReferenceError: x is not defined
    //  console.log(y); // Output: ReferenceError: y is not defined
}
demonstrateBlockScope();
