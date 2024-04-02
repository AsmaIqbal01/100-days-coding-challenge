/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
 Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.*/
function large_shirt(size: string, message:string)
{
      console.log(`Size is ${size} and "${message}" should be printed on it`);
}
large_shirt("large","I LOve Typescript");
large_shirt("small","Back in Action");
large_shirt("Medium","I LOve Typescript");

