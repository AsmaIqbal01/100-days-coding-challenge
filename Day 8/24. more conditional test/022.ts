/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:*/
//• Tests for equality and inequality with strings
console.log("tests for equal and unequal strings");
let pass1= 12345;
let pass2= 12345;

if(pass1==pass2){
    console.log("strings are equal", pass1 == pass2);
} else{
    console.log("strings are not equal", pass1 != pass2);
}
let pname="Asma";
let fname="Muhammad Iqbal";

if(pname==fname){
    console.log("strings are equal", pname == fname);
} else{
    console.log("strings are not equal", pname != fname);
}

//• Tests using the lower case function
console.log("tests for lower case function");
let caselowerTrue="bunny";

if(caselowerTrue==caselowerTrue.toLowerCase()){
    console.log("strings are in Lowercse", caselowerTrue == caselowerTrue.toLowerCase());
} else{
    console.log("strings are not in lowercase", caselowerTrue != caselowerTrue.toLowerCase());
}
let caselowerTrue1="BunNy";
if(caselowerTrue1==caselowerTrue1.toLowerCase()){
    console.log("strings are in Lowercse", caselowerTrue1 == caselowerTrue1.toLowerCase());
} else{
    console.log("strings are not in lowercase",caselowerTrue1==caselowerTrue1.toLowerCase());
}

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("tests for ==,!=,< > ,>=,<=");
let x=10;
let y=5;
console.log("test for ==: x=10", x == 10);
console.log("test for ==: y=10", y == 10);
console.log("test for !=: y=10", y != 10);
console.log("test for !=: x=10", x != 10);
console.log("test for >: x>y", x > y);
console.log("test for >: y>x", y > x);

console.log("test for <: y<x", y < x);
console.log("test for <: x<y", x < y);
console.log("test for >=: x>=y", x >= y);
console.log("test for >=: y>=x", y >= x);
console.log("test for <=: y<=x", y <= x);
console.log("test for <=: x<=y", x <= y);
//Tests using "and" and "or" operators

console.log("tests for and or operator");

let temp = 20;
if(temp > 0 && temp <= 30 ){
  console.log("Weather is Good",temp > 0 && temp <= 30  );
} 
 else{
    console.log("Weather is not Good", temp > 30);
 }

 let temp1 = 40;
if(temp1 > 0 && temp1 <= 30 ){
  console.log("Weather is Good",temp1 > 0 && temp1 <= 30  );
} 
 else{
    console.log("Weather is not Good", temp1 > 30);
 }
let temp2 = 25;
 if(temp2 > 0 || temp2 <= 30 ){
    console.log("Weather is Good",temp2 > 0 && temp2 <= 30  );
  } 
   else{
      console.log("Weather is not Good", temp2 > 30);
   }
  
   let temp3 = 40;
  if(temp3 > 0 || temp3 <= 30 ){
    console.log("Weather is Good",temp3 > 0 && temp3 <= 30  );
  } 
   else{
      console.log("Weather is not Good", temp3 > 30);
   }
  
//• Test whether an item is in a array
let cities=['Karachi','Hyderabad','Lahore','Islamabad'];
let valueCheck="Lahore";
console.log("Lahore is in array\t",cities.includes(valueCheck));

//• Test whether an item is not in a array*/


let notValue="Faisalabad";
console.log("Faisalabad is not in array\t",cities.includes(notValue));
