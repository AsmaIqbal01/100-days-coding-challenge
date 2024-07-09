// Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
//function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divideNumbers(dividend: number, divisor: number): { quotient: number; remainder: number } {
return {
  quotient: Math.floor(dividend / divisor),
  remainder: dividend % divisor
};
}

// Example usage
console.log(divideNumbers(47,3));
//output : Quotient is 15, Remainder is 2

