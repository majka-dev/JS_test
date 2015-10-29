var reload = require('reloadjs');
var reloadable = reload('./boolean.js');

var answer = (((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");

console.log(answer);

// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,48];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answers = multiplesOfEight[4] % 8 !== 0;
console.log(answers);