var color = prompt("What's your favorite primary color?","Type your favorite color here").toLowerCase();

switch(color) {
  case 'red':
    alert("Red's a cool color!");
    console.log("Red is a cool color!");
    break;
  case 'blue':
    alert("That's my favorite color, too!");
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
      alert("Yellow is awesome color!");
      console.log("Yellow is awesome color!");
      break;
  default:
    alert("I don't think that's a primary color! Choose from red, yellow and blue. Try again!");
    console.log("I don't think that's a primary color!");

}

/*function lala () {
 var color = prompt("What's your favorite primary color?","Type your favorite color here").toLowerCase();
 }
 lala();

 switch(color) {
 case 'red':
 alert("Red's a cool color!");
 console.log("Red is a cool color!");
 break;
 case 'blue':
 alert("That's my favorite color, too!");
 console.log("That's my favorite color, too!");
 break;
 case 'yellow':
 alert("Yellow is awesome color!");
 console.log("Yellow is awesome color!");
 break;
 default:
 alert("I don't think that's a primary color! Choose from red, yellow and blue.");
 console.log("I don't think that's a primary color!");
 lala();
 }*/