const readLine = require('readline-sync');


let adjectives = ['red', 'grey', 'angry', 'peaceful', 'bad', 'golden'];
let nouns = ['car', 'table', 'feet', 'rocks', 'stick', 'bush', 'trashcan'];
let verbs = ['ran', 'flicks', 'launched', 'runs', 'smash', 'dashes', 'kicked', 'laughing'];
let adverb = ['calmly'];


adjectives.shift();
adjectives.unshift(readLine.question("Adjective (Color): "));
if (adjectives[0] == ""){
    adjectives[0] = "red";
}

verbs.shift();
verbs.unshift(readLine.question("Verb (Past Tense): "));
if (verbs[0] == ""){
    verbs[0] = "ran";
}

adjectives[1] = readLine.question("Adjective: ");
if (adjectives[1] == ""){
    adjectives[1] = "grey";
}

nouns.shift();
nouns.unshift(readLine.question("Noun: "));
if (nouns[0] == ""){
    nouns[0] = "car";
}

verbs[1] = readLine.question("Verb: ");
if (verbs[1] == ""){
    verbs[1] = "flicks";
}

verbs[2] = readLine.question("Verb (+ed): ");
if (verbs[2] == ""){
    verbs[2] = "launched";
}

adjectives[2] = readLine.question("Adjective: ");
if (adjectives[2] == ""){
    adjectives[2] = "angry";
}

verbs[3] = readLine.question("Verb: ");
if (verbs[3] == ""){
    verbs[3] = "runs";
}

verbs[4] = readLine.question("Verb: ");
if (verbs[4] == ""){
    verbs[4] = "smash";
}

nouns[1] = readLine.question("Noun: ");
if (nouns[1] == ""){
    nouns[1] = "table";
}

verbs[5] = readLine.question("Verb: ");
if (verbs[5] == ""){
    verbs[5] = "dashes";
}

adjectives[3] = readLine.question("Adjective: ");
if (adjectives[3] == ""){
    adjectives[3] = "peaceful";
}

verbs[6] = readLine.question("Verb: ");
if (verbs[6] == ""){
    verbs[6] = "kicked";
}

adjectives[4] = readLine.question("Adjective: ");
if (adjectives[4] == ""){
    adjectives[4] = "bad";
}

nouns[2] = readLine.question("Noun: ");
if (nouns[2] == ""){
    nouns[2] = "feet";
}

adverb[0] = readLine.question('Adverb: ');
if (adverb[0] == ""){
    adverb[0] = "calmly";
}


nouns[3] = readLine.question("Noun: ");
if (nouns[3] == ""){
    nouns[3] = "rocks";
}

adjectives[5] = readLine.question("Adjective: ");
if (adjectives[5] == ""){
    adjectives[5] = "golden";
}

nouns[4] = readLine.question("Noun: ");
if (nouns[4] == ""){
    nouns[4] = "stick";
}

verbs[7] = readLine.question("Verb (Uppercase): ");
if (verbs[7] == ""){
    verbs[7] = "laughing";
}

nouns[5] = readLine.question("Noun: ");
if (nouns[5] == ""){
    nouns[5] = "bush";
}

nouns[6] = readLine.question("Noun: ");
if (nouns[6] == ""){
    nouns[6] = "trashcan";
}



console.log(`Ronald wanted, no, needed to get that MacGuffin. He needed it so bad that if he didn’t get it, he’ll turn ${adjectives[0]}.
He ${verbs[0]} across ground, with a determined mindset. Jumping into his ${adjectives[1]} ${nouns[0]}, he ${verbs[1]} a switch and is ${verbs[2]} out.
It made him very ${adjectives[2]}. Instead, he ${verbs[3]} down the road to ${verbs[4]} a window into a house. Ronald steals a pencil from the ${nouns[1]} and ${verbs[5]} onto the road.
He bends over to write on the ground that he is ${adjectives[3]}. Suddenly, he gets ${verbs[6]} in the head. He’s having a very ${adjectives[4]} day. Ronald has had enough.
He will get that MacGuffin no matter the cost. Using nothing but his ${nouns[2]}, he walks ${adverb[0]} down the road once more. He powers through all the ${nouns[3]} thrown
at him and reaches the MacGuffin on the stump. When he grabs at it, a powerful shudder runs through his body. He’s finally done it! He finally has the almighty ${adjectives[5]} ${nouns[4]}.
${verbs[7]}, he turns around and points it at a ${nouns[5]}. Then someone plucks it out of his hand and tosses it into the ${nouns[6]}.
`);


// Ronald wanted, no, needed to get that MacGuffin. He needed it so bad that if he didn’t get it, he’ll turn red.
// He ran across ground, with a determined mindset. Jumping into his grey car, he flicks a switch and is launched out.
// It made him very angry. Instead, he runs down the road to smash a window into a house. Ronald steals a pencil from the table and dashes onto the road.
// He bends over to write on the ground that he is peaceful. Suddenly, he gets kicked in the head. He’s having a very bad day. Ronald has had enough.
// He will get that MacGuffin no matter the cost. Using nothing but his feet, he walks calmly down the road once more. He powers through all the rocks thrown
// at him and reaches the MacGuffin on the stump. When he grabs at it, a powerful shudder runs through his body. He’s finally done it! He finally has the almighty golden stick.
// Laughing, he turns around and points it at a bush. Then someone plucks it out of his hand and tosses it into the trashcan.
