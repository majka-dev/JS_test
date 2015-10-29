var reload = require('reloadjs');
var reloadable = reload('./contact.list.js');

var friends = {};
friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(408) 555-5555",
    address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
    for(var prop in obj) {
        console.log(prop);
    }
};
/*for (var key in object) {
// Access that key's value
// with object[key]
}*/
var search = function(name) {
    for(var prop in friends) {
        if(friends[prop].firstName === name) {
            console.log(friends[prop]);
            return friends[prop];
        }
    }
};

list(friends);
search("Steve");


// LIST FRIENDS

var friends = {
    bill: {
        firstName: 'Bill',
        lastName:'Norris',
        number: '7784235343',
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: 'Steve',
        lastName:'Obama',
        number: '6044235343',
        address: ['Willingdon Ave','Richmond','ON','8882']
    },
    jack: {
        firstName: 'Jack',
        lastName:'Norwick',
        number: '7780042343',
        address: ['One Microsoft Way','Redmond','WA','98052']
    }
};

var list= function(){
    for (var firstName in friends) {
        console.log (firstName)
    }
};

var search = function(name){
    for (var firstName in friends) {
        if (friends[firstName].firstName === name) {
            console.log(friends[firstName]);
            return friends[firstName];
        }
    }

}