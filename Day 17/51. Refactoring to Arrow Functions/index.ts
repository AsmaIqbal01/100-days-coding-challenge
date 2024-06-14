/*Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.*/
//calculating area of rectangle using function
function calaulateArea(width:number,height:number){
 return width * height;
}
//calling function
console.log(calaulateArea(3, 8));
//refactoring the same with arrow function
const calculateAreaArrow=(length:number,width:number):number=>{
    return length * width;
}
// calling arrow funtion
   console.log(calculateAreaArrow(3,8));