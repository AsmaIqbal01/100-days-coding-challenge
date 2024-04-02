/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
var magicians1 = ["Rex", "Chris", "Alon", "Fred"];
function show_magicians1(magicians1) {
    magicians1.forEach(function (magician1) {
        console.log(magician1);
    });
}
show_magicians1(magicians1);
function make_great(magicians1) {
    for (var i = 0; i < magicians1.length; i++) {
        magicians1[i] = "The Great " + magicians1[i];
    }
}
make_great(magicians1);
show_magicians1(magicians1);
