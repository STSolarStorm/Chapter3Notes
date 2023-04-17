const readLine = require('readline-sync');

//Create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    onichan: 9876543
};

//log all
console.log(contacts);

//access a specific entry by its key (name)
console.log(contacts.bff);

//can't access if the key doesnt exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3456677;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?
console.log("bff" in contacts); //true
console.log("myself" in contacts); //false

//objects are like arrays - pass by reference (location) not by value
//notice the following
let a = {
    value: 20
};
let b = a;
let c = {
    value: 20
};

console.log(a == b); //true, same object as b points to a
console.log(a == c); //false, different objects with the same value
console.log(b == c); //false, different objects with the same value

console.log(a.value == c.value); //true, the value is the same but not the object


let dog = {
    dogName: "Zelda",
    breed: "Terrier",
    age: 9,
    size: "Medium",
    barks: true
};
console.log(dog);

let whiteboard = {
    length: "long",
    color: "white",
    eraser: true,
    writing: true,
    height: "tall"
};
console.log(whiteboard);

let Jeager = {
    Name: "Eren Jeager",
    BlackAirForceEnergy: true,
    Allegiance: "Himself (his friends)",
    TitanPower: "Attack, Founding, Warhammer",
    Age: 19

};
console.log(Jeager);

let computer = {
    Company: "HP",
    Length: "Long",
    Height: "Long",
    Fast: true,
    Good: true
};
console.log(computer);

let germany = {
    Patriotic: "Debatable",
    Exist: true,
    Government: "Democratic",
    SideinWWII: "Axis",
    Population: "84,528,911"
};
console.log(germany);