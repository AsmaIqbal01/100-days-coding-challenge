/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.
 • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/


 let Guest_list:string[]=['Zaid','Haroon','Tazeen','Ali','Azfaar'];
 let invite1:string="\nYou are welcome at dinner today.\n ";
 let new_invite:string="\nToday you are invited for dinner at 8 pm\n";
 for(let i=0; i<Guest_list.length; i++){
    console.log("Dear", Guest_list[i],`${invite1}`);

 }

let absent_guest:string="Ali";
 let new_guest:string="Fatima";
 Guest_list[3]=new_guest;
 console.log("\n\nMr.", `${absent_guest}`,"Wont be coming.\n\n");
 console.log("Miss.", `${new_guest}`," will be coming and be our guest today.\n\n");
 for(let i=0; i<Guest_list.length; i++){
    console.log(`Dear`, Guest_list[i],`${new_invite}`);   
 }
 export{Guest_list}