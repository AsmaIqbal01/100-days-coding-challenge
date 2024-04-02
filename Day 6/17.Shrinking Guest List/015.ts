/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
 print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at 
the end of your program.*/
let Guest_list:string[]=['Zaid','Haroon','Tazeen','Ali','Azfaar'];
 //let invite1:string="\nYou are welcome at dinner today.\n ";
 //let new_invite:string="\nToday you are invited for dinner at 8 pm\n";
 for(let i=0; i< Guest_list.length;i++){
    console.log(`${Guest_list[i]} you are allowed `);
}

let absent_guest:string="Ali";
 let new_guest:string="Fatima";
 Guest_list[3]=new_guest;
 
 
 

//console.log("After insertion in the start and in the end of the array\n");
Guest_list.unshift('Zoraiz');
Guest_list.push('Zubda');
for(let i=0; i< Guest_list.length;i++){
    console.log(`${Guest_list[i]} you are allowed `);
}

Guest_list.splice(2,0,'Sam');
for(let i=0; i< Guest_list.length;i++){
    console.log(`${Guest_list[i]} you are allowed `);
}
 console.log("Update message:unfortunately we have less space so are allowed to Invite only two guests");

 while(Guest_list.length>2){
    let remove_guest= Guest_list.pop();
    console.log(`${remove_guest} You are not allowed,SORRY`);
 }
 for(let i=0; i< Guest_list.length;i++){
    console.log(`${Guest_list[i]} you are allowed `);
}
Guest_list.splice(0,2);
console.log(Guest_list);