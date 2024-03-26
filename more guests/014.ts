/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
 • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let Guest_list:string[]=['Zaid','Haroon','Tazeen','Ali','Azfaar'];
 let invite1:string="\nYou are welcome at dinner today.\n ";
 let new_invite:string="\nToday you are invited for dinner at 8 pm\n";
 
let absent_guest:string="Ali";
 let new_guest:string="Fatima";
 Guest_list[3]=new_guest;
 console.log("\n\nMr.", `${absent_guest}`,"Wont be coming.\n\n");
 console.log("Miss.", `${new_guest}`," will be coming and be our guest today.\n\n");
 /*for(let i=0; i<Guest_list.length; i++){
    console.log(`Dear`, Guest_list[i],`${new_invite}`);   
 }*/
console.log("Found big table, now more guests to come.");
console.log("After insertion in the start and in the end of the array\n");
Guest_list.unshift('Zoraiz');
Guest_list.push('Zubda');

for(let i=0; i<Guest_list.length; i++){
    console.log(`Dear`, Guest_list[i],`${new_invite}`);   
 }
 
Guest_list.splice(2,0,'Sam');
for(let i=0; i<Guest_list.length; i++){
    console.log(`Dear`, Guest_list[i],`${new_invite}`);   
 }
