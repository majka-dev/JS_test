var reload = require('reloadjs');
var reloadable = reload('./Objects.js');

// 1. type of Objects

var object1 = {
    name:"Maria",
    age:25
};

var cucu = function() {
        console.log("My name is"+" "+object1.name+"! My age is "+object1.age);
    }; // vsimaj si medzery mozes ich napisat do pomlciek alebo priamo do stringu predtym!!!

cucu(); // musis call function!


// 2. type of Objects

var object2 = new Object();
object2.name = "Majka";
object2.age = 25;

object2.together = function(){
    console.log("My name is "+ this.name + "! My age is "+ this.age);
};

object2.together();

var myObj = new Object();
myObj["name"] = "Majka";
myObj.age = 25;
myObj.together = function() {
    console.log(this.name + " " + this.age);
};

myObj.together();

