// Q58 - Write a simple program that can take lots of scores and find their average.
// Declare an array of numbers called `scores` and initialize it with some values.
let scores: number[] = [75, 85, 74, 18, 69];

// Declare a variable `total` of type `number` and initialize it to 0.
let total: number = 0;

// Use a `for...of` loop to iterate over the `scores` array.
for (let score of scores) {
  // Add each score to the `total` variable.
  total += score;
}

// Calculate the average score by dividing the `total` by the length of the `scores` array.
let average: number = total / scores.length;

// Log the average score to the console using a template literal.
console.log(`The average score is ${average}`);