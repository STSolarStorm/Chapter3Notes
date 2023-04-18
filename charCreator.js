const readLine = require('readline-sync');

let diceRolls = [];
let character1 = {
    //object empty for now
};

createChar(character1, diceRolls);


function rollD6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list){
    for(let i = 0; i<amount; i++){
        let roll = rollD6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for(let i = 0; i<list.length; i++) {
        sum += list[i];
    }
    console.log(`The total was: ${sum}.`);
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list){
    character.name = readLine.question("Enter Character Name: ");
    character.strength = rollStat(diceRolls);
    console.log("Rolling Strength");
    character.dexterity = rollStat(diceRolls);
    console.log("Rolling Dexterity");
    character.constitution = rollStat(diceRolls);
    console.log("Rolling Constitution");
    character.intelligence = rollStat(diceRolls);
    console.log("Rolling Intelligence");
    character.wisdom = rollStat(diceRolls);
    console.log("Rolling Wisdom");
    character.charisma = rollStat(diceRolls);
    console.log("Rolling Charisma");
    displayChar(character);
}

function displayChar(char){
    console.log('----------------------');
    console.log(`Name: ${char.name}`);
    console.log(`Strength: ${char.strength}`);
    console.log(`Dexterity: ${char.dexterity}`);
    console.log(`Constitution: ${char.constitution}`);
    console.log(`Intelligence: ${char.intelligence}`);
    console.log(`Wisdom: ${char.wisdom}`);
    console.log(`Charisma: ${char.charisma}`);
    console.log('----------------------');
}