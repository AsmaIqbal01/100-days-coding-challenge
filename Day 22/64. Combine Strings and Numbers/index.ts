/*Combine Strings and Numbers: Write a function that merges a piece of text with a number. 
For example, if provided with "Age: " and 30, it should give back "Age: 30".*/
//function that merges string with number
function combStringsNum(anyString:string,anyNumber:number):string {
    return anyString + anyNumber;

}
// generting with "Age is:" + 30
let combined=combStringsNum("Age is:",30);
console.log(combined);