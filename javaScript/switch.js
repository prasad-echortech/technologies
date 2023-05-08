//use logical operators to find weather the age of a person lies between 10 an 20 using switch case

const prompt = require("prompt-sync")({ sigint: true });
let age = prompt("enter your age ");
console.log(typeof age);
age=Number.parseInt(age);
console.log(typeof age);
switch(age) {
   case 10:
   console.log("age is " + age)
   break;
   case 20:
   console.log("age is " + age)
   break;

   default:console.log("no age matched")
}