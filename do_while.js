var reload = require('reloadjs');
var reloadable = reload('./do_while.js');

// do / while
var loopCondition = false;

do {
    console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);

//review



