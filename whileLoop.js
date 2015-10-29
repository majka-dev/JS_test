var reload = require('reloadjs');
var reloadable = reload('./whileLoop.js');

//WHILE LOOP

var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
    console.log("Heads! Flipping again...");
    var coinFace = Math.floor(Math.random() * 2); //WHy we have to write it here again?
}
console.log("Tails! Done flipping.");


//While loop

var understand = true;

while(understand){
    console.log("I'm learning while loops!");
    var understand = false; // keby nedame sem tento kod tak bude bezat donekonecna!!! tu ukoncime while loop!
}

//while loop
var count = 0, toto= -2;

function loop (bubu){
    while(bubu < 3){
        console.log("I'm looping!");
        bubu++; //zastav ak je  cislo zvacsene o plus 1
    }
}

loop(count); // zobrazi 3krat od 0 do 3
loop(toto); //zobrazi 5 krat od -2 do 3

//while loop
var kuku = true;

var soloLoop = function(){
    while(kuku){
        console.log("Looped once!");
        kuku= false;
    }
};

var kuku = true;

var soloLoop = function(){
    while(kuku){
        console.log("Looped once!");
        kuku= false;
    }
};

soloLoop();

