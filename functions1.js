// //Problem #1
// function findAreaOfRectangle(length, width){
//     console.log(`The area of the rectangle is ${length*width}`);
// }
// findAreaOfRectangle(7,4);

// //Problem #2
// function findAreaOfCircle(radius){
//     console.log(`The area of the circle is ${3.14*radius*radius}`);
// }
// findAreaOfCircle(4);

// //Problem #3
// function findMin(x, y){
//     if (x < y){
//         console.log(`${x} is the smaller of the two.`);
//     } else {
//         console.log(`${y} is the smaller of the two.`)
//     }
// }
// findMin(3, 20);

// //Problem #4
// function checkEquality(a, b){
//     if (a == b){
//         console.log(`${a} is equal to ${b}`);
//     } else {
//         console.log("The two numbers are not equal");
//     }
// }
// checkEquality(3, 3);

// //Problem #5
// function calculateLargestRectangle(TriL1, TriW1, TriL2, TriW2){
//     let triangle1Area = TriL1 * TriW1;
//     let triangle2Area = TriL2 * TriW2;
//     if(triangle1Area > triangle2Area){
//         console.log("The first triangle has the larger area. ");
//     } else {
//         console.log("The second triangle has the larger area. ");
//     }
// }
// calculateLargestRectangle(100, 3, 5, 10);

// //Problem 6
// function charityCollection(donation1, donation2, donation3) {
//     let donateSum = donation1 + donation2 + donation3;
//     if (donateSum >= 1000){
//         console.log(`Since the total sum donated is at least $1000, the charity shall receive $${donateSum * 2}.`);
//     } else {
//         console.log(`The sum of the donations did not reach at least $1000. The sum of the donations is $${donateSum}.`);
//     }
// }
// charityCollection(100, 1000, 100);

// //Problem 7
// function stateOfMatter(temp) {
//     if (temp <= 32){
//         console.log("The water is frozen.");
//     } else if (temp > 32 && temp < 212){
//         console.log("The water should be a liquid.");
//     } else {
//         console.log("The water is a gas.");
//     }
// }
// stateOfMatter(300);

// //Problem 8
// function findMaximumValue(Num1, Num2, Num3){
//     if (Num1 > Num2 && Num1 > Num3){
//         console.log(`${Num1} is the largest number.`);
//     } else if (Num2 > Num1 && Num2 > Num3){
//         console.log(`${Num2} is the largest number.`);
//     } else {
//         console.log(`${Num3} is the largest number.`);
//     }
// }
// findMaximumValue(100, 102, 3);

// //Problem 9
// function findMinimumValue(NumOne, NumTwo, NumThree){
//     if (NumOne < NumTwo && NumOne < NumThree){
//         console.log(`${NumOne} is the smallest number.`);
//     } else if (NumTwo < NumOne && NumTwo < NumThree){
//         console.log(`${NumTwo} is the smallest number.`);
//     } else {
//         console.log(`${NumThree} is the smallest number.`);
//     }
// }
// findMinimumValue(32, 200,3);

//Problem 10
function updatedCharityCollection(Money){
    if (Money < 1000) {
        console.log(`$${Money} was raised, so $${Money + 100} will be donated.`);
    } else if (Money > 1000 && Money < 2000 ){
        console.log(`$${Money} was donated, so $${Money * 2} will be donated`);
    } else if(Money > 2000){
        console.log(`$${Money} was donated, so $${Money + 2000} will be donated.`)
    }
}
updatedCharityCollection(1500);