"use strict";
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let username = ["Ali", "Zara", "Usman", "Admin", "Zehra", "Zaid"];
let x = 0;
for (let i = 0; i < username.length; i++) {
    if (x === username.length) {
        console.log("");
    }
    else {
        console.log("We need to find some users!");
    }
}
