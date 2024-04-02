/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.

*/
var pName = ['Zara', 'Sara', 'Saad', 'Maaz'];
var message = "Welcome to the programming";
for (var i = 0; i < pName.length; i++) {
    console.log(pName[i], message);
}
