var name = prompt("What is your favorite name?").toUpperCase();

switch(name) {
    case 'MARIA':
        console.log("That's my name hihi");
        document.write("That's my name hihi");
    break;

    case 'BENJAMIN':
        console.log("That's name of my boyfriend");
        document.write("That's name of my boyfriend");
    break;

    case 'JOZEF':
        console.log("That's name of my father");
        document.write("That's name of my father");
    break;

    case 'IVETA':
        console.log("That's name of my mum");
        document.write("That's name of my mum");
    break;

    case 'RICHARD':
        console.log("That's name of my brother");
        document.write("That's name of my brother");
    break;

    default:
        console.log("I don't know this name");
        document.write("I don't know this name");

}
