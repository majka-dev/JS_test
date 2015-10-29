var reload = require('reloadjs');
var reloadable = reload('./Heter.arrays.js');

//Heterogeneous arrays
var myArrays = [25, true, "Majka", Object];

//Multidimensional arrays
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};

var newArray = [[2,3],[4,6,9],[2],[myObj]];

console.log(newArray);

// Editing an existing object
var myObject = {
    name: 'Majka',
    type: 'Awesome',
    interests: myArray // key with value array
};

var myArray = ["I love music", 2, "years"]; //array

console.log(myObject.name +" "+ myObject.type +" "+ myArray[2]);


//next

var language = ["Slovak","English","Czech","French"];

var myOwnObject = {
    name:"Majka",
    age:25,
    skills: language[2]
};

console.log("My name is " + myOwnObject.name + ", I am " + myOwnObject.age +
" years old. I speak " + myOwnObject.skills+"!");
