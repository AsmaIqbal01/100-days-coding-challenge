// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

// Define an enum called Vehicles with three categories: cars, trucks, and motorcycles
enum Vehicles {
    // The first value in the enum is assigned the value 0 by default
    cars,
    // The second value in the enum is assigned the value 1 by default
    trucks,
    // The third value in the enum is assigned the value 2 by default
    motorcycles
  }
  
  // Log the value of Vehicles.cars to the console
  console.log(Vehicles.cars); // Output: 0
  
  // You can also log the string value of Vehicles.cars to the console
  console.log(Vehicles[0]); // Output: "cars"
  
  // You can also use the enum values in a class
  class Vehicle {
    constructor(public type: Vehicles) {}
  
    public getDescription(): string {
      return `This vehicle is a ${Vehicles[this.type].toLowerCase()}`
    }
  }
  
  // Example usage:
  const myCar = new Vehicle(Vehicles.cars);
  console.log(myCar.getDescription()); // Output: This vehicle is a cars