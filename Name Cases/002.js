/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
var personName = "Asma Iqbal";
console.log("Name:", personName);
console.log("Lower Case:", personName.toLowerCase());
console.log("Upper Case:", personName.toUpperCase());
console.log("Title Case:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
