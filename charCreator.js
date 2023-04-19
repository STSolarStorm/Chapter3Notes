const readLine = require('readline-sync');

let diceRolls = [];
let eyeColors = ['Blue', 'Green', 'Brown', 'Hazel', 'Crimson', 'Black'];
let race = ['Human', 'Angel', 'Monster', 'Dwarf', 'Elf', 'Dragon'];
let monsterSubRace = ['Slime', 'Orc', 'Ogre', 'Minotaur', 'Dullahan', 'Vampire', 'Zombie'];
let magicType = ['Fire', 'Water', 'Earth',' Air', 'Lightning',];
let character1 = {
    //object empty for now
};
let character2 = {
    //object empty for now
};
let character3 = {
    //object empty for now
};

createChar(character1, diceRolls);
createChar(character2, diceRolls);
createChar(character3, diceRolls);

function rollD6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list){
    for(let i = 0; i<amount; i++){
        let roll = rollD6();
        // console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for(let i = 0; i<list.length; i++) {
        sum += list[i];
    }
    // console.log(`The total was: ${sum}.`);
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list);
}

function pickRandomChoice(choices){
    let randomNum = Math.floor(Math.random()*choices.length);
    return choices[randomNum];
}


function createChar(character, list){
    character.name = readLine.question("Enter Character Name: ");
    character.eyeColor = pickRandomChoice(eyeColors);
    character.race = pickRandomChoice(race);
    character.subRace = pickRandomChoice(monsterSubRace);
    character.magicType = pickRandomChoice(magicType);
    character.strength = rollStat(diceRolls);
    // console.log("Rolling Strength");
    character.dexterity = rollStat(diceRolls);
    // console.log("Rolling Dexterity");
    character.constitution = rollStat(diceRolls);
    // console.log("Rolling Constitution");
    character.intelligence = rollStat(diceRolls);
    // console.log("Rolling Intelligence");
    character.wisdom = rollStat(diceRolls);
    // console.log("Rolling Wisdom");
    character.charisma = rollStat(diceRolls);
    // console.log("Rolling Charisma");
    character.luck = rollD6();
    // console.log("Rolling Skill Slot Maximum");
    character.skillSlot = rollStat(diceRolls);


    displayChar(character);
}

function displayChar(char){
    console.log('x---------------------x');
    console.log(`Name: ${char.name}`);
    console.log(`Eye Color: ${char.eyeColor}`);
    if (char.race == race[2]){
        console.log(`Race: Monster || Type: ${char.subRace}`);
    } else{
        console.log(`Race: ${char.race}`);
    }
    console.log(`Magic Type: ${char.magicType}`);
    console.log('----------------------');
    console.log(`Strength: ${char.strength}`);
    console.log(`Dexterity: ${char.dexterity}`);
    console.log(`Constitution: ${char.constitution}`);
    console.log(`Intelligence: ${char.intelligence}`);
    console.log(`Wisdom: ${char.wisdom}`);
    console.log(`Charisma: ${char.charisma}`);
    console.log(`Luck: ${char.luck}`);
    console.log(`Skill Slot Max: ${char.skillSlot}`);
    console.log('x--------------------x');
}