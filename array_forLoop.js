var reload = require('reloadjs');
var reloadable = reload('./array_forLoop.js');

var cities = ["Paris","Zilina","London","Praha"];

for (var i=0; i<= cities.length; i++){
    console.log(cities[i]);
}
