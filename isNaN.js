var reload = require('reloadjs');
var reloadable = reload('./isNaN.js');

var isEven = function(number) {
    if(number % 2 === 0) {
        return true;
    }
    else if (isNaN(number)) {
        return "Input isn't a number"
    }
    else{
        return false;
    };
};

isEven(10);

/*If you call isNaN on something, it checks to see if that thing is not a number. So:

isNaN('berry'); // => true
isNaN(NaN); // => true
isNaN(undefined); // => true
isNaN(42);  // => false*/