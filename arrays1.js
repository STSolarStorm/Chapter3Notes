// //Problem 1
// function firstElement (arr){
//     console.log(arr[0])
// }
// let myArray = [1, 2, 3, 4];
// firstElement(myArray);


// //Problem 2
// function secondElement (arr){
//     let lastIndex= arr.length;
//     console.log(lastIndex)
// }
// let myArray = [1, 2, 3, 4];
// secondElement(myArray);


// //Problem 3
// function thirdElement (arr){
//     if(arr.length == 0){
//         console.log('Empty array');
//     } else  {
//         console.log(arr[0]);
//     }
//
// }
// let myArray = [];
// thirdElement(myArray);


// //Problem 4
//     let Array = [1, 2, 3, 4, 5, 6];
//     for(let i = Array.length-1; i >= 0; i--){
//         console.log(Array[i]);
//
//     }


// //Problem 5
// function everyThird(arr){
//     for (let i = 2; i < arr.length; i=i+3){
//         console.log(arr[i]);
//     }
// }
// everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


// //Problem 6
// function everySecond(arr){
//     for (let i = 2; i < arr.length; i=i+2){
//         console.log(arr[i]);
//     }
// }
// everySecond([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


// //Problem 7
// function biggerThanFour(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if (item > 4) {
//             console.log(item);
//         }
//     }
// }
// biggerThanFour([0, 23, 5, 4, 3, -31, 300]);

// //Problem 8
// function biggerThanNum(arr, x) {
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if (item > x) {
//             console.log(item);
//         }
//     }
// }
// biggerThanNum([100,0, 42, 52525, 1, 4, 65, 432, ], 50);

//Problem 9
function uniqueValue([arr]){
    for (let i = 0; i < arr.length; i++){
       if (arr[i] == arr[i]){
           console.log();
       } else {
           console.log(arr[i]);
       }
    }
}
uniqueValue([1, 2, 3, 4, 1, 1, 3, 6, 8 ]);