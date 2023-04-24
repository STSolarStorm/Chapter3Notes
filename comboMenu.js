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
let sandWich = 0;
let bev = 0;
let fry = 0;
let finalSandwich = "";
let finalBevSize = "";
let finalFrySize = "";
// let order = {
//
// };

//Iteration 1
let askSandwich = readLine.question("What kind of sandwich do you want? Chicken ($5.25), Beef ($6.25), or Tofu ($5.75)?: ");
if (askSandwich == "Chicken"){
    sandwich = chickenSandwich;
    finalSandwich = "Chicken";
    sandWich++;
} else if (askSandwich == "Beef"){
    sandwich = beefSandwich;
    finalSandwich = "Beef";
    sandWich++;
} else if (askSandwich == "Tofu"){
    sandwich = tofuSandwich;
    finalSandwich = "Tofu";
    sandWich++;
}


//Iteration 2
let askBeverage = readLine.question("Would you like to purchase a beverage?: ");
if (askBeverage == "Yes"){
    let askBevSize = readLine.question("What beverage size would you like? Small ($1.00), Medium ($1.50), or Large ($2.25)?: ");
    if (askBevSize == "Small"){
        beverage = smallBev;
        finalBevSize = "Small";
        bev++;

    }else if (askBevSize == "Medium"){
        beverage = mediumBev;
        finalBevSize = "Medium";
        bev++;
    }else if (askBevSize == "Large"){
        beverage = largeBev;
        finalBevSize = "Large";
        bev++;
    }
} else {
    beverage = 0;
}


//Iteration 3
let askFries = readLine.question("Would you like to purchase fries?: ");
if (askFries == "Yes"){
    let askFriesSize = readLine.question("What beverage size would you like? Small ($1.00), Medium ($1.50), or Large ($2.00)?: ");
    if (askFriesSize == "Small"){

        let megaSize = readLine.question("Mega-sizing your fries will give you large fires, but bring the price to that of the large. Would you like to mega-size your fries?: ");
        if (megaSize == "Yes"){
            fries = largeFries;
            finalFrySize = "Large";
            fry++;
        }else if (megaSize == "No"){
            fries = smallFries;
            finalFrySize = "Small";
            fry++;
        }
    }else if (askFriesSize == "Medium"){
        fries = mediumFries;
        finalFrySize = "Medium";
        fry++;
    }else if (askFriesSize == "Large"){
        fries = largeFries;
        finalFrySize = "Large";
        fry++;
    }
} else {
    fries = 0;
}


//Iteration 4
let ketchupPacketRequest = Number(readLine.question("How many ketchup packets ($0.25 per packet) would you like?: "));
let ketchupPacket = 0.25 * ketchupPacketRequest;
let order = sandwich + beverage + fries + ketchupPacket;
let taxedOrder = order * 0.07;
let finalOrder = order + taxedOrder;
if (sandWich == 1 && beverage == 1 && fries == 1){
    let comboOrder = order - 1.00;
    let taxedComboOrder = comboOrder * 0.07;
    let finalComboOrder = comboOrder + taxedComboOrder;
    console.log(`You ordered a ${finalSandwich} Sandwich.`);
    if (askBeverage == "Yes"){
        console.log(`You ordered a ${finalBevSize} Beverage`);
    }
    if (askFries == "Yes")
        console.log(`You ordered ${finalFrySize} Fries`);
    if (ketchupPacketRequest > 0){
        console.log(`You ordered ${ketchupPacketRequest} Ketchup Packets. `);
    }
    console.log(`Your ordered a Combo!. The order comes to ${finalComboOrder.toFixed(2)}`);
} else{
    console.log(`You ordered a ${finalSandwich} Sandwich.`);
    if (askBeverage == "Yes"){
        console.log(`You ordered a $${finalBevSize} Beverage`);
    }
    if (askFries == "Yes")
    console.log(`You ordered ${finalFrySize} Fries`);
    if (ketchupPacketRequest > 0){
        console.log(`You ordered ${ketchupPacketRequest} Ketchup Packets. `);
    }
    console.log(`Your order comes to $${finalOrder.toFixed(2)}`);
}

