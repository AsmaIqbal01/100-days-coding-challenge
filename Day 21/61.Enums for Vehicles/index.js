// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Define an enum called Vehicles with three categories: cars, trucks, and motorcycles
var Vehicles;
(function (Vehicles) {
    // The first value in the enum is assigned the value 0 by default
    Vehicles[Vehicles["cars"] = 0] = "cars";
    // The second value in the enum is assigned the value 1 by default
    Vehicles[Vehicles["trucks"] = 1] = "trucks";
    // The third value in the enum is assigned the value 2 by default
    Vehicles[Vehicles["motorcycles"] = 2] = "motorcycles";
})(Vehicles || (Vehicles = {}));
// Log the value of Vehicles.cars to the console
console.log(Vehicles.cars); // Output: 0
// You can also log the string value of Vehicles.cars to the console
console.log(Vehicles[0]); // Output: "cars"
// You can also use the enum values in a class
var Vehicle = /** @class */ (function () {
    function Vehicle(type) {
        this.type = type;
    }
    Vehicle.prototype.getDescription = function () {
        return "This vehicle is a ".concat(Vehicles[this.type].toLowerCase());
    };
    return Vehicle;
}());
// Example usage:
var myCar = new Vehicle(Vehicles.cars);
console.log(myCar.getDescription()); // Output: This vehicle is a cars
