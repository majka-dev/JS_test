var reload = require('reloadjs');
var reloadable = reload('./if_else.js');

var isEven = function(number) {
    if(number % 2 === 0){ return true,
        console.log("true");
    }
    else{ return false,
        console.log("false");
    }
};

isEven(11);