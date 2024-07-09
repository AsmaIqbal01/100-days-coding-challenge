/*Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.*/
//type alias to create a custom type for either a circle or rectangle
type Shape={
    name:"Circle" | "Reactangle";//name of the shape
    radius?:number,//radius of the circle
    width?:number,//width of the rectangle
    height?:number//height of the rectangle
};
// describe if circle 
let c:Shape={
    name:"Circle",
    radius:5
};
//describe if rectangle
let r:Shape={
    name:"Reactangle",
    width:10,
    height:5
};
//log both shapes
console.log("Shape of a circle:",c);
console.log("Shape of a rectangle",r);