/*Logical AND Verification: Create a function that checks two boolean (true or false) values.
It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.*/
function checkBothTrue(value1, value2) {
    return value1 && value2;
}
/*

Explanation:
The `checkBothTrue` function takes two boolean values as input, `value1` and `value2`. It uses the logical AND operator (`&&`) to check if both `value1` and `value2` are true. If both are true, the function returns `true`; otherwise, it returns `false`.

Here are some examples of how to use the `checkBothTrue` function:
*/
console.log("If both are true", checkBothTrue(true, true));
// Output: true
console.log("If both are false", checkBothTrue(true, false));
// Output: false
console.log("If one is true", checkBothTrue(false, false));
