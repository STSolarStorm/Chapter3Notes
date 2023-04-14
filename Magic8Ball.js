const readLine = require('readline-sync');

let answers = ["Yes", "No", "Maybe", "It Is Decidedly So", "Absolutely", "Absolutely Not", "My Sources Say No", "Ask Again Later", "Prediction Unavailable", "Can't Tell You"];

console.log('To use the program, enter in a question. To end the program, enter "End" or "Stop"');

let playTime = 0;
let userQuest = readLine.question("Question: ");
    while (userQuest != "End" || userQuest == "Stop" || userQuest == "end" || userQuest == "stop") {
        if (userQuest == "") {
            console.log("User did not provide a question.");
            userQuest = readLine.question("Question: ");
        }else{
            let randomNum = Math.floor(Math.random() * answers.length);
            let answer = answers[randomNum];
            console.log(answer);
            userQuest = readLine.question("Question: ");
        }
        playTime++;
        if (playTime == 8){
            console.log(`End of Program. You have run the program ${playTime} times.`);
            break;
        }

}
if (userQuest == "End" || userQuest == "Stop" || userQuest == "end" || userQuest == "stop"){
    console.log(`End of Program. You have run the program ${playTime} times.`);
}
