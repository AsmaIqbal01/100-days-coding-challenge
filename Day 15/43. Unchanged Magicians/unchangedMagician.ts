/*Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
gBecause the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array
 of the original names and one array with the Great added to each magician’s name.
*/
let originalMagicians: string[] = ["Rex", "Fred", "Alon"];
function show_magician(originalMagicians: string[]) {
    originalMagicians.forEach((magician) => {
      console.log(magician);
    });
  }

function make_great(originalMagicians: string[]): string[] {
    let greatMagicians = [];
   originalMagicians.forEach(magician => {
        greatMagicians.push(`The Great ${magician} `);
    });
    return greatMagicians;
}

let greatMagicians = make_great(originalMagicians.slice()); 
console.log("Original magicians:");
show_magician(originalMagicians); //show original names
console.log("Great magicians:");
show_magician(greatMagicians); // Shows modified names