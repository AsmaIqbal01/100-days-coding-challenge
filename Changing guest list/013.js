"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.
 • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest_list = void 0;
var Guest_list = ['Zaid', 'Haroon', 'Tazeen', 'Ali', 'Azfaar'];
exports.Guest_list = Guest_list;
var invite1 = "\nYou are welcome at dinner today.\n ";
var new_invite = "\nToday you are invited for dinner at 8 pm\n";
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear", Guest_list[i], "".concat(invite1));
}
var absent_guest = "Ali";
var new_guest = "Fatima";
Guest_list[3] = new_guest;
console.log("\n\nMr.", "".concat(absent_guest), "Wont be coming.\n\n");
console.log("Miss.", "".concat(new_guest), " will be coming and be our guest today.\n\n");
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear", Guest_list[i], "".concat(new_invite));
}
