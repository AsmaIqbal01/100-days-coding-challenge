// Q58 - Write a simple program that can take lots of scores and find their average.
var scores = [75, 85, 74, 18, 69];
var total = 0;
for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
    var score = scores_1[_i];
    total += score;
}
var average = total / scores.length;
console.log("The average score is ".concat(average));
