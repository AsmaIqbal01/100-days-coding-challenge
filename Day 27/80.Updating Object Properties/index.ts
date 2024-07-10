/*Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
last task :Creating and Accessing Object Properties: Construct an object representing a car 
with properties for make, model, and year. Then, show how you can access the model property of the car.*/

//updating and accessing properties of car
let car:any={
    make:"Toyota",
    model:"Camry",
    year:2020,
}; 
//adding a property named color to the existing car object
car.color="silver";
//updating the year property to 2021
car.year=2021;
//showing how to access the model property of the car
console.log(car);

