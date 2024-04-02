/*Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
 cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
var Mountains = ['K2', 'Alpamayo', 'Nanga Parbat', 'Mount Everst', 'fuji'];
console.log("List of Mountains: ");
/*for (let top of Mountains){
   console.log(top);
}*/
for (var i = 0; i < Mountains.length; i++) {
    console.log(Mountains[i]);
}
