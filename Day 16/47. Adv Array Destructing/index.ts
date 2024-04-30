/*Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, 
each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.*/
const laptops =[
    {
    make:"Dell", model:"Inspiron", year:2019    
    },
    {
    make:"HP", model:"EliteBook", year:2020
    },
    {
        make:"Lenovo", model:"ThinkPad", year:2021
    }
]
const [firstLaptop, secondLaptop] = laptops;
console.log(firstLaptop);
console.log(secondLaptop);