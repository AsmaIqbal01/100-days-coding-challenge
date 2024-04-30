/*Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
 Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.*/
let laptop1 = [1000, 5000, 3000];
let laptop2 = [24000, 15000, 6000];
let combinedLaptops = [...laptop1, ...laptop2].sort((a,b)=>a-b);
console.log(combinedLaptops);