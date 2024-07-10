/*Write a function that greets a user. It should take the user's name as a parameter and say hello.
If no name is given, it should greet an anonymous user.*/
function greetUser(name) {
    var userName = name || "Anonymous";
    console.log("Hello, ".concat(userName, "!"));
}
//when name is given 
greetUser("ALi");
// when name is not given
greetUser();
