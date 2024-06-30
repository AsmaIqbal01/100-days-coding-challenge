/*Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.*/
// initialize a list of numbers in an array
let numberList:number[]=[1,2,3,4,5];
//log array
console.log("Original list of numbers = ",numberList);
// doubles each number
let numberDouble:number[]=numberList.map((number)=>number*2);
//showing double of numbers in an array
console.log("List updated, double of it = ",numberDouble);
