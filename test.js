var reload = require('reloadjs');
var reloadable = reload('./test.js');

var node  = function(x,y,id) {
    console.log("Position is" +" "+ node);
};

console.log("lolo");

function toto (par1,par2) {
    var titi = par1 + par2;
    return titi + par2;
}

//exercise from CodeAcademy
var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Bubu", "Majka", "Laka", "Opica", "Ben"];

for (var i = 2; i < cities.length; i+=2) {
    console.log("Test " + cities[i]);
}

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

// loops and arrays
var names = ["Majka", "Ben", "Risko", "Ivka", "Jozko"];
for (var i= 0; i < names.length; i++) {
    console.log("I know someone called" + " " + names[i]);
}

