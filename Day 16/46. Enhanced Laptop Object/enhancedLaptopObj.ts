/*Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties 
make, model, year, and a method describe() that logs a sentence about the laptop.*/

 
  let laptop ={
    make:"Dell",
    model:"Inspiration",
    year:2022,
    describe:function(){
        console.log(`The ${this.make} ${this.model} was released in ${this.year}.`);
    }
  };
  laptop.describe();