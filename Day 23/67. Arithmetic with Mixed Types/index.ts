/*Arithmetic with Mixed Types: Write a function that takes two parameters: 
a number and a string that represents a number (e.g., "5"). Return their sum as a number.*/
//function to add a number and a string representing a number
function addNumberAndString(num1: number, num2: string): number {
  //convert the string to a number
  const num3 = Number(num2);
  
  //return the sum of the two numbers
  return num1 + num3;
}

//example usage
console.log(addNumberAndString(5, "3"));