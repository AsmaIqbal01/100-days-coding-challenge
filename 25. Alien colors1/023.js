/*Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.*/
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Passing version
var alien_color = ['green', 'yellow', 'red'];
for (var i = 0; i < alien_color.length; i++) {
    if (alien_color[i] == 'green') {
        console.log("The Player earned just 5 Points");
    }
    else {
    }
}
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//Failing version
var alien_color1 = "red";
if (alien_color1 == 'green') {
    console.log("The Player earned just 5 Points");
}
else {
}
