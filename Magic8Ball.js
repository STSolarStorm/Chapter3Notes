const readLine = require('readline-sync');

let answers = ["Yes", "No", "Maybe", "It Is Decidedly So", "Absolutely", "Absolutely Not", "My Sources Say No", "Ask Again Later", "Prediction Unavailable", "Can't Tell You"];

console.log("To use the program, enter in a question.");





let userQuest = readLine.question("Question: ");
let playTime = 0;
    while (playTime < 8) {

        if (userQuest == "") {
            console.log("User did not provide a question.");
        }else {
            let randomNum = Math.floor(Math.random() * answers.length);
            let answer = answers[randomNum];
            console.log(answer);
        }
        playTime++;
    }
    console.log(`End of Program. You have run the program ${playTime} times.`);

}
    console.log("End of Program");