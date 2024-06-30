/*Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.*/
var numberList = [1, 2, 3, 4, 5];
console.log("Original list of numbers = ", numberList);
var numberDouble = numberList.map(function (number) { return number * 2; });
console.log("List updated, double of it = ", numberDouble);
