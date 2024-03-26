/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner. 
 Then use your list to print a message to each person, inviting them to dinner.*/
 let personInvites:string[]=['Anwaar','Ahmed','Muhammad'];
 let message:string="you are invited at dinner today";
 for(let i=0; i<personInvites.length;i++){
    console.log(personInvites[i],message);
 }

