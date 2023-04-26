const readLine = require('readline-sync');

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
let price;

// console.log('Ordering a Chicken Sandwich, a Medium Beverage, Large Fries, 2 Ketchup Packets, 2 Mayonnaise Packets, and 1 Mustard Packet will give you the "Specialty Sandwich" combo, and a discount of $2.00 will be given.');

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
let mayonnaisePacketRequest = Number(readLine.question("How many mayonnaise packets ($0.20 per packet) would you like?: "));
let mayonnaisePacket = 0.20 * mayonnaisePacketRequest;
let mustardPacketRequest = Number(readLine.question("How many mustard packets ($0.30 per packet) would you like?: "));
let mustardPacket = 0.30 * mustardPacketRequest;

let order = beverage + fries + ketchupPacket + mayonnaisePacket + mustardPacket + sandwich;
let taxedOrder = order * 0.07;
let finalOrder = order + taxedOrder;

if (sandWich == 1 && beverage == 1 && fries == 1) {
    let comboOrder = order - 1.00;
    let taxedComboOrder = comboOrder * 0.07;
    let finalComboOrder = comboOrder + taxedComboOrder;
    price = finalComboOrder;

} else {
    price = finalOrder;
}
console.log("_________________");
console.log(`Sandwich: ${finalSandwich}`);
console.log(`Beverage: ${finalBevSize}`);
console.log(`Fries: ${finalFrySize}`);
console.log(`Ketchup Packets: ${ketchupPacketRequest}`);
console.log(`Mayonnaise Packets: ${mayonnaisePacketRequest}`);
console.log(`Mustard Packets: ${mustardPacketRequest}`);
console.log(`Final Price: $${price.toFixed(2)}`);
console.log("_________________");

// if (askSandwich == "Chicken" && askBeverage == "Medium" && askFries == "Large" && ketchupPacketRequest == 2 && mayonnaisePacketRequest == 2 && mustardPacketRequest == 1) {
//     let specialtySandwich = order - 2.00;
//     let taxedSpecialtySandwich = specialtySandwich * 0.07;
//     let finalSpecialtySandwich = specialtySandwich + taxedSpecialtySandwich;
//     console.log(`You ordered a ${finalSandwich} Sandwich.`);
//     console.log(`You ordered a ${finalBevSize} Beverage`);
//     console.log(`You ordered ${finalFrySize} Fries`);
//     console.log(`You ordered ${ketchupPacketRequest} Ketchup Packets. `);
//     console.log(`You ordered ${mayonnaisePacketRequest} Mayonnaise Packets. `);
//     console.log(`You ordered ${mustardPacketRequest} Mustard Packets. `);
//     console.log(`You ordered the Specialty Sandwich. Your order comes to $${finalSpecialtySandwich.toFixed(2)}`);
// } else if (sandWich == 1 && beverage == 1 && fries == 1) {
//     let comboOrder = order - 1.00;
//     let taxedComboOrder = comboOrder * 0.07;
//     let finalComboOrder = comboOrder + taxedComboOrder;
//     console.log(`You ordered a ${finalSandwich} Sandwich.`);
//     console.log(`You ordered a ${finalBevSize} Beverage`);
//     console.log(`You ordered ${finalFrySize} Fries`);
//     if (ketchupPacketRequest > 0){
//         console.log(`You ordered ${ketchupPacketRequest} Ketchup Packets. `);
//     }
//     if (mayonnaisePacketRequest > 0){
//         console.log(`You ordered ${mayonnaisePacketRequest} Mayonnaise Packets. `);
//     }
//     if (mustardPacketRequest > 0){
//         console.log(`You ordered ${mustardPacketRequest} Mustard Packets. `);
//     }
//     console.log(`Your ordered a Combo! The order comes to ${finalComboOrder.toFixed(2)}`);
// } else{
//     console.log(`You ordered a ${finalSandwich} Sandwich.`);
//     if (askBeverage == "Yes"){
//         console.log(`You ordered a ${finalBevSize} Beverage`);
//     }
//     if (askFries == "Yes"){
//         console.log(`You ordered ${finalFrySize} Fries`);
//     }
//     if (ketchupPacketRequest > 0){
//         console.log(`You ordered ${ketchupPacketRequest} Ketchup Packets. `);
//     }
//     if (mayonnaisePacketRequest > 0){
//         console.log(`You ordered ${mayonnaisePacketRequest} Mayonnaise Packets. `);
//     }
//     if (mustardPacketRequest > 0){
//         console.log(`You ordered ${mustardPacketRequest} Mustard Packets. `);
//     }
//     console.log(`Your order comes to $${finalOrder.toFixed(2)}`);
// }

