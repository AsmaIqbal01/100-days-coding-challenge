/*Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. 
It should log each hobby with a statement saying you enjoy that hobby.

Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array,
 providing a way to handle multiple inputs gracefully.*/

//This 
 function enjoyHobbies(...hobbies: string[])
/*The ... syntax in the function parameter list indicates that the hobbies parameter is a rest parameter. 
means that the function can accept any number of arguments, which will be collected into an array called hobbies.*/
{ 
    for (const hobby of hobbies) {
      console.log(`I enjoy ${hobby}!`);
    }
  }
  
  // Call the function with multiple hobbies
  enjoyHobbies('reading', 'hiking', 'playing guitar', 'cooking');