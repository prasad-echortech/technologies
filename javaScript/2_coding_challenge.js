// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement


const massMark = 90;
const heightMark = 1.95;
const massJohn = 50;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark , BMIJohn);

const message = (`Mark's BMI is higher than John's! or John's BMI is higher than Mark's!`);
console.log(message);

if(BMIMark > BMIJohn){
    console.log(`Marks BMI ${BMIMark} is Higher then the John's ${BMIJohn}`);
}else{
    console.log(`John' BMI ${BMIJohn} is Higher then the Marks's ${BMIMark}`);
}