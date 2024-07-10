// Write a function that takes an object as an argument and logs all of its properties and values.
//function that takes an object as an argument and logs all of its properties and values
function logObjectProperties(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log("".concat(prop, ": ").concat(obj[prop]));
        }
    }
}
;
// Example usage
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
