// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
//list of mixed items in an array
let mixedArray = ["Sarah",12,"One","Sugar",45,false];
//extracting only those items which are string 
let stringsArray:string[]=mixedArray.filter((item)=>typeof item==="string");
//log oiginal mixed array
console.log("Original mixed array = ",mixedArray);
// log now string  items generating new list 
console.log("Array with only strings = ", stringsArray);