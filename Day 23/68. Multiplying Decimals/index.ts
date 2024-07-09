// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multiplyDecimals(num1: number, num2: number): number {
  // Multiply the two numbers
  let product = num1 * num2;

  // Round the result to two decimal places
  return Math.round(product * 100) / 100;
}

// Example usage
console.log(multiplyDecimals(2.5, 3.7));
//output : 9.25 results in two decimal numbers
