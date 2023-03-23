//2.4.1 Intro to Arrays

//Create
let students = ['Adam', 'Brad', 'Casey', 'David'];
let values = [1, 2, 3, 4];

//Accessing items in array
console.log(students);
console.log(students[0]); //The beginning number has index 0
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]); //error, as there is no 5th item. Logs in "undefined"
console.log(students[4-2]);

//Formatting items in array
console.log('Student: ' + students[0]);
console.log(`Student 2: ${students[1]}`);

//Changing an item
students[1] = 'Stephanie';
console.log(students);

//Push adds to the end
students.push('Eve');
console.log(students);
students.push('Fred', 'Georgia');
console.log(students);

//Pop removes the last item
students.pop();
console.log(students);

//Shift removes the beginning item
students.shift();
console.log(students);

//Unshift adds an item to the beginning
students.unshift('Zeke');
console.log(students);
students.unshift('Yvonne', 'Xavier');
console.log(students);

//length of array = # of items in it
numStudents = students.length;
console.log(numStudents);

//How to access the LAST item
let lastStudent = students[students.length - 1];
console.log(lastStudent);

//Slice up a piece of original array
let fruits = ['apple', 'banana', 'orange', 'lemon', 'grape'];
let citris = fruits.slice(2, 4);
console.log(citris);
//the first number (2) is the starting index, which is included.
//the second number (4) is the index we stop BEFORE. It's not included.