// Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
/*The function, `functionDeclaration`, is a function declaration. It is defined using the `function` keyword,
and it can be called before it is defined (because the function is hoisted to the top of its scope).*/
function functionDeclaration(num) {
    return num * num;
}
/*The function, `functionExpression`, is a function expression. It is assigned to a variable using the `const` keyword.
Function expressions are not hoisted, so they cannot be called before they are defined.
Both functions perform the same task of squaring a number. The `functionDeclaration` function takes a number as input,
 multiplies it by itself, and returns the result. The `functionExpression` function also takes a number as input,
  multiplies it by itself, and returns the result.
*/
var functionExpression = function (num) {
    return num * num;
};
console.log(functionDeclaration(5));
console.log(functionExpression(2));
