// //Problem 1
// function count(n) {
//     for (let i = 0; i <= n; i++){
//         console.log(i);
//     }
// }
// count([7]);


// //Problem 2
// function count(n) {
//     for (let i = 0; i <= n; i++){
//         if (n <= 0){
//         console.log('invalid');
//         } else {
//             console.log(i);
//         }
//     }
//
// }
// count([0]);

// //Problem 3
// function replace(y, x){
//     let newArr = [];
//     for (let i = 0; i<y.length; i++){
//         newArr.push(y[i]);
//         newArr[i] = x;
//     }
//     console.log(newArr)
// }
// replace([1, 2, 3, 4, 5, 6], 9);


// //Problem 4
// function change(y, x){
//     let newArr = [];
//     for (let i = 0; i<y.length; i++){
//         newArr.push(y[i]);
//         newArr[i] = x;
//     }
//     console.log(y);
//     console.log(newArr)
// }
// change([1, 2, 3, 4, 5, 6], 9);


// //Problem 5
// function replaceBig(y){
//     let endVal = y.length;
//     let firstVal = y[0];
//     let newArr = [];
//     if (endVal > firstVal) {
//         for (let i = 0; i < y.length; i++) {
//             newArr.push(y[i]);
//             newArr[i] = endVal;
//         }
//         console.log(newArr);
//     } else if (firstVal > endVal){
//         for (let i = 0; i < y.length; i++) {
//             newArr.push(y[i]);
//             newArr[i] = firstVal;
//         }
//         console.log(newArr);
//     }
//     console.log(newArr)
// }
// replaceBig([8, 2, 3, 4, 5, 6]);


// //Problem 6
// function replaceBig2(y){
//     let endVal = y.length;
//     let firstVal = y[0];
//     let newArr = [];
//     if (endVal > firstVal) {
//         for (let i = 0; i < y.length; i++) {
//             newArr.push(y[i]);
//             newArr[i] = endVal;
//         }
//         console.log(newArr);
//         console.log(y);
//     } else if (firstVal > endVal){
//         for (let i = 0; i < y.length; i++) {
//             newArr.push(y[i]);
//             newArr[i] = firstVal;
//         }
//         console.log(newArr);
//         console.log(y);
//     }
// }
// replaceBig2([8, 2, 3, 4, 5, 6]);


// //Problem 7
// function replaceSmol(y){
//     let endVal = y.length;
//     let firstVal = y[0];
//     let newArr = [];
//     if (endVal < firstVal) {
//         for (let i = 0; i < y.length; i++) {
//             newArr.push(y[i]);
//             newArr[i] = endVal;
//         }
//         console.log(newArr);
//     } else if (firstVal < endVal){
//         for (let i = 0; i < y.length; i++) {
//             newArr.push(y[i]);
//             newArr[i] = firstVal;
//         }
//         console.log(newArr);
//     }
// }
// replaceSmol([8, 2, 3, 4, 5, 6]);
//
//
// //Problem 8
// function replaceSmol2(y){
//     let endVal = y.length;
//     let firstVal = y[0];
//     let newArr = [];
//     if (endVal < firstVal) {
//         for (let i = 0; i < y.length; i++) {
//             newArr.push(y[i]);
//             newArr[i] = endVal;
//         }
//         console.log(newArr);
//         console.log(y);
//     } else if (firstVal < endVal){
//         for (let i = 0; i < y.length; i++) {
//             newArr.push(y[i]);
//             newArr[i] = firstVal;
//         }
//         console.log(newArr);
//         console.log(y);
//     }
// }
// replaceSmol2([1, 2, 3, 4, 5, 6]);


// //Problem 9
// function ReplaceProductandDividend(number) {
//     let product = 1;
//     let arr9 = [];
//     for (let i = 0; i < number.length; i++) {
//         product = product * number[i];
//     }
//     for (let i = 0; i < number.length; i++) {
//         arr9[i] = product/number[i];
//     }
//     console.log(arr9);
// }
// (ReplaceProductandDividend([1, 4, 6, 2, 4]));


//Problem 10
function ReplaceProductandDividend2(number) {
    let product = 1;
    let arr10 = [];
    for (let i = 0; i < number.length; i++) {
        product = product * number[i];
    }
    for (let i = 0; i < number.length; i++) {
        arr10[i] = product/number[i];
    }
    console.log(number);
    console.log(arr10);
}
(ReplaceProductandDividend2([1, 4, 6, 2, 4]));