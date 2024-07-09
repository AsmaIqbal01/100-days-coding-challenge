// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multiplyDecimals(num1, num2) {
    // Multiply the two numbers
    var product = num1 * num2;
    // Round the result to two decimal places
    return Math.round(product * 100) / 100;
}
// Example usage
console.log(multiplyDecimals(2.5, 3.7));
