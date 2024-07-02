// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
// Define a function called `makeAdder` that takes a single argument `customNumber` of type `number`.
function makeAdder(customNumber: number) {
    // The function returns another function that takes a single argument `otherNumber` of type `number`.
    return function (otherNumber: number) {
      // This inner function returns the sum of `customNumber` and `otherNumber`.
      return customNumber + otherNumber;
    };
  }
  
  // Create a new function called `addFive` by calling `makeAdder` with the argument `5`.
  const addFive = makeAdder(5);
  
  // Call the `addFive` function with the argument `10` and log the result to the console.
  console.log(addFive(10)); // Output: 15