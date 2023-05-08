// In JavaScript, if you forget to declare a variable with a keyword: var, let, and const, 
// JavaScript automatically takes it as a global variable, and you can access it anywhere in the program. 
 //for example
 x = "hello world";
 console.log(x);

 function afun(){
    console.log(x);
 }
afun();

//Strict mode will throw an error if you try to use the same syntax after including
//  "strict mode" in your program. It will help you in writing cleaner and more secure code.

"use strict"
x = "hello world";
console.log(x);  //throws an error x is not defined because of "use strict"


const hasDriverLicense = false;
const testPass = true;

if(testPass) hadDrivingLicense = true;
if(hasDriverLicense) console.log("your now allowed To Drive!!!*");