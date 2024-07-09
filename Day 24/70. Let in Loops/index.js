/*Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
Explain how the let keyword affects the visibility of the loop variable.*/
function printNumbers() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    // The let keyword affects the visibility of the loop variable i.
    // Within the loop, we can access the value of i but outside the loop, i is not defined.
    // console.log('Outside the loop:', i); here it will throw error because its not accessible here as loop is ended.
}
printNumbers();
//shows output 
