const readLine = require('readline-sync');

// let sandwich = ["chickenSandwich", "beefSandwich", "tofuSandwich"];
let chickenSandwich = 5.25;
let beefSandwich = 6.25;
let tofuSandwich = 5.75;
let smallBev = 1.00;
let mediumBev = 1.50;
let largeBev = 2.25;
let smallFries = 1.00;
let mediumFries = 1.50;
let largeFries = 2.00;
let sandwich;
let beverage;
let fries;
// let order = {
//
// };

//Iteration 1
let askSandwich = readLine.question("What kind of sandwich do you want? Chicken ($5.25), Beef ($6.25), or Tofu ($5.75)?: ");
if (askSandwich == "Chicken"){
    console.log(`That Chicken Sandwich will cost you $${chickenSandwich}.`);
    // askSandwich = chickenSandwich;
    sandwich = chickenSandwich;
} else if (askSandwich == "Beef"){
    console.log(`That Beef Sandwich will cost you $${beefSandwich}.`);
    sandwich = beefSandwich;
} else if (askSandwich == "Tofu"){
    console.log(`That Tofu Sandwich will cost you $${tofuSandwich}.`);
    sandwich = tofuSandwich;
}


//Iteration 2
let askBeverage = readLine.question("Would you like to purchase a beverage?: ");
if (askBeverage == "Yes"){
    let askBevSize = readLine.question("What beverage size would you like? Small ($1.00), Medium ($1.50), or Large ($2.25)?: ");
    if (askBevSize == "Small"){
        console.log(`That small beverage will cost $${smallBev}.`);
        beverage = smallBev;
    }else if (askBevSize == "Medium"){
        console.log(`That medium beverage will cost $${mediumBev}.`);
        beverage = mediumBev;
    }else if (askBevSize == "Large"){
        console.log(`That large beverage will cost $${largeBev}.`);
        beverage = largeBev;
    }
}


//Iteration 3
let askFries = readLine.question("Would you like to purchase fries?: ");
if (askFries == "Yes"){
    let askFriesSize = readLine.question("What beverage size would you like? Small ($1.00), Medium ($1.50), or Large ($2.00)?: ");
    if (askFriesSize == "Small"){

        let megaSize = readLine.question("Mega-sizing your fries will give you large fires, but bring the price to that of the large. Would you like to mega-size your fries?: ");
        if (megaSize == "Yes"){
            console.log(`That'll cost you ${largeFries}`);
            fries = largeFries
        }else if (megaSize == "No"){
            console.log(`The small fries will cost $${smallFries}.`);
            fries = smallFries;
        }
    }else if (askFriesSize == "Medium"){
        console.log(`The medium fires will cost $${mediumFries}.`);
        fries = mediumFries;
    }else if (askFriesSize == "Large"){
        console.log(`The large fries will cost $${largeFries}.`);
        fries = largeFries;
    }
}



// let order = askSandwich + askBeverage + askFries;
let order = sandwich + beverage + fries;
console.log(order);