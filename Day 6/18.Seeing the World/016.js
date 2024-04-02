var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/
var places = ['Maldives', 'Norway', 'Spain', 'Turkey', 'Singapore', 'Indonesia'];
//Print array in its original order.
console.log("\n Locations on my check lists are:" + places);
//Print array in alphabetical order without modifying the actual list.
console.log('\n Alphabetical order of array without modifying it:' + __spreadArray([], places, true).sort()); //... shows that we are making copy of array without real changes.
//Show that your array is still in its original order by printing it.
console.log("\n Still in order:" + places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('\n Reverse Alphabetical order of array without modifying it:' + __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("\n Still in order:" + places);
//Reverse the order of your list. Print the array to show that its order has changed.
var reversedPlaces = places.reverse();
console.log('\n Reverse the order:' + reversedPlaces);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
var reReverse = reversedPlaces.reverse();
console.log('\n Reverse the order:' + reReverse);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var sortPlaces = places.sort();
console.log('\n Sort in alphabetical order:' + sortPlaces);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var revOrder = sortPlaces.reverse();
console.log('\n Sort in reverse alphabetical order:' + revOrder);
