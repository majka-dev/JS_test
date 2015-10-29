var game = prompt("Are you ready to fight white walker (YES or NO)?").toUpperCase();

switch(game){
    case "YES":
        alert("That's great so let's begin!");
        var smart = prompt("Are you smart?").toUpperCase();
        var strong = prompt("Are you strong?").toUpperCase();
        if(smart ==="YES" || strong === "YES") {
            if(smart ==="YES" && strong === "YES"){
                alert("Great you are smart and strong, if you choose right weapon you gonna win!");
            }
            else {
                alert("Great you are smart or strong, if you choose right weapon you gonna win!");
            }
            var weapon = prompt("Choose your weapon, gun, knife or hammer and ATTACK?").toUpperCase();
            switch (weapon){
                case"GUN":
                    alert("You won, white walker is dead!");
                    break;
                case "KNIFE":
                    alert("You are not strong enough with just knife!");
                    break;
                case "HAMMER":
                    alert("You won, congratulations white walker is dead!");
                    break;
                default:
                    alert("Please choose one of our weapons")
            }
        }
         /*if(smart ==="YES" && strong === "YES"){
            alert("Great you are smart and strong, if you choose right weapon you gonna win!");
        }
        else if(smart ==="YES" || strong === "YES"){
            alert("Great you are smart or strong, if you choose right weapon you gonna win!");
        }*/
        else if(!(smart ==="YES" || strong === "YES")) {
            alert("Maybe you just need more training and time to study about white walkers to get ready to fight one!")
        }
        else {
            alert("Your answer wasn't clearly YES or NO!")
        }
        break;
    case "NO":
        alert("Maybe you just need more time to get ready!");
        break;
    default:
        console.log("Your answer wasn't clear!");
}