const readLine = require('readline-sync');

// //Problem 1
// function nameSwapper(){
//     let first = readLine.question('What is your first name?: ');
//     let last = readLine.question('What is your last name?: ');
//     return (`${last}, ${first}`);
// }
//let myName = nameSwapper();
// console.log(nameSwapper());


// //Problem 2
// function numberGenerator(){
//     let integer1 = readLine.question('Enter an integer between 0 and 9: ');
//     let integer2 = readLine.question('Enter another integer between 0 and 9: ');
//     let total = integer1 + integer2;
//
//     return (total);
// }
// console.log('Your number is ' + numberGenerator());


// //Problem 3
// function averageTemp(temp1, temp2, temp3, temp4, temp5, temp6, temp7){
//     let tempSum = temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7;
//     let tempAve = tempSum / 7.;
//     return (tempAve).toFixed(2);
// }
// console.log(averageTemp(20, 15, 50, 100, 42, 80, 89));




// //Problem 4
// function charityCollectionRevisted(){
//     let Money = 0;
//     let collectedCharity = 0;
//     let peopleNumber = Number(readLine.question('How many people are raising money?: '));
//     while (peopleNumber > 0){
//         collectedCharity = Number(readLine.question('How much money was donated?: '));
//         Money += collectedCharity;
//         peopleNumber--;
//     }
//     if (Money <= 1000) {
//         console.log(`$${Money} was raised, so $${Money + 100} will be donated.`);
//         return
//     }
//     if (Money >= 1000 && Money <= 2000 ){
//         console.log(`$${Money} was raised, so $${Money * 2} will be donated`);
//         return
//     }
//     if(Money >= 2000){
//         console.log(`$${Money} was raised, so $${Money + 2000} will be donated.`);
//     }
// }
// charityCollectionRevisted();


// //Problem 5
// function dartsGame(){
//     let points1 = Number(readLine.question('How many points did you earn for game 1?: '));
//     if (points1 > 180){
//         console.log("That is not a possible number of points. Do it again!");
//         points1 = Number(readLine.question('How many points did you earn for game 1?: '));
//     }
//     let points2 = Number(readLine.question('How many points did you earn for game 2?: '));
//     if (points2 > 180){
//         console.log("That is not a possible number of points. Do it again!");
//         points2 = Number(readLine.question('How many points did you earn for game 2?: '));
//     }
//     let points3 = Number(readLine.question('How many points did you earn for game 3?: '));
//     if (points3 > 180){
//         console.log("That is not a possible number of points. Do it again!");
//         points3 = Number(readLine.question('How many points did you earn for game 3?: '));
//     }
//     let pointTotal = points1 + points2 + points3;
//     return (pointTotal);
// }
// console.log(dartsGame());


// //Problem 6
// function dartsGame2(){
//     let oneplayerpoints1 = Number(readLine.question('How many points did you earn for game 1?: '));
//     if (oneplayerpoints1 > 180){
//         console.log("That is not a possible number of points. Do it again!");
//         oneplayerpoints1 = Number(readLine.question('How many points did player 1 earn for game 1?: '));
//     }
//     let oneplayerpoints2 = Number(readLine.question('How many points did player 1 earn for game 2?: '));
//     if (oneplayerpoints2 > 180){
//         console.log("That is not a possible number of points. Do it again!");
//         oneplayerpoints2 = Number(readLine.question('How many points did player 1 earn for game 2?: '));
//     }
//     let oneplayerpoints3 = Number(readLine.question('How many points did player 1 earn for game 3?: '));
//     if (oneplayerpoints3 > 180){
//         console.log("That is not a possible number of points. Do it again!");
//         oneplayerpoints3 = Number(readLine.question('How many points did player 1 earn for game 3?: '));
//     }
//     let playeronepointTotal = oneplayerpoints1 + oneplayerpoints2 + oneplayerpoints3;
//
//
//     let twoplayerpoints1 = Number(readLine.question('How many points did player 2 earn for game 1?: '));
//     if (twoplayerpoints1 > 180){
//         console.log("That is not a possible number of points. Do it again!");
//         twoplayerpoints1 = Number(readLine.question('How many points did player 2 earn for game 1?: '));
//     }
//     let twoplayerpoints2 = Number(readLine.question('How many points did player 2 earn for game 2?: '));
//     if (twoplayerpoints2 > 180){
//         console.log("That is not a possible number of points. Do it again!");
//         twoplayerpoints2 = Number(readLine.question('How many points did player 2 earn for game 2?: '));
//     }
//     let twoplayerpoints3 = Number(readLine.question('How many points did player 2 earn for game 3?: '));
//     if (twoplayerpoints3 > 180){
//         console.log("That is not a possible number of points. Do it again!");
//         twoplayerpoints3 = Number(readLine.question('How many points did player 2 earn for game 3?: '));
//     }
//     let playertwopointTotal = twoplayerpoints1 + twoplayerpoints2 + twoplayerpoints3;
//
//
//     console.log(`Player 1 scored: ${playeronepointTotal}`);
//     console.log(`Player 2 scored: ${playertwopointTotal}`);
//     if (playeronepointTotal > playertwopointTotal){
//         console.log("Player 1 is the winner!");
//     } else if (playertwopointTotal > playeronepointTotal){
//         console.log("Player 2 is the winner!");
//     } else {
//         console.log("The game is a tie!");
//     }
// }
//
// dartsGame2();


// //Problem 7
// function linearEquation(){
//     let m = Number(readLine.question("What is the slope?: "));
//     let b = Number(readLine.question("What is the y-intercept?: "));
//     console.log(`y = ${m}x + ${b}`);
// }
// linearEquation();


// //Problem 8
// function slopeFormula(){
//     let x1 = Number(readLine.question("What is the first x point?: "));
//     let x2 = Number(readLine.question("What is the second x point?: "));
//     let y1 = Number(readLine.question("What is the first y point?: "));
//     let y2 = Number(readLine.question("What is the second y point?: "));
//
//     let slope1 = y2 - y1;
//     let slope2 = x2 - x1;
//     console.log(`m equals ${slope1}/${slope2}`);
// }
// slopeFormula();