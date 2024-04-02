"use strict";
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
 For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
 The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
let pizzas = ['Fajita', 'pepperoni', 'barbq'];
pizzas.forEach(pizzas => {
    console.log("I like " + pizzas + " pizza");
});
console.log("I adore the sizzling fusion of flavors in a fajita pizza, where the tangy marinated chicken meets the vibrant bell peppers and onions.");
console.log("The classic pepperoni pizza, with its perfect blend of spicy pepperoni and gooey mozzarella, never fails to satisfy my cravings.");
console.log("The smoky essence of a barbecue pizza, featuring savory barbecue sauce, grilled chicken, and red onions, adds a delightful twist to my pizza repertoire.");
console.log("I really love pizza for its versatility and the sheer joy it brings to my taste buds.");
