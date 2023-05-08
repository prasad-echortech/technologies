//use logical operators to find weather the age of a person lies between 10 and&& 20
const prompt=require("prompt-sync")({sigint:true}); 
 let age = prompt("enter your age ");
 console.log(typeof age);
 age=Number.parseInt(age);
 console.log(typeof age);
 
 if(age >= 10 && age <= 20){
    console.log("yes age lies between 10 and 20");
 }
 else{
    console.log("no age is not lies between 10 and 20");
 }

 //use logical operators to find weather the age of a person lies between 10 or|| 20

 if(age == 10 || age >= 10 && age <= 20){
   console.log("hello");
}

//driving eligibility based on age using if els and ternary as well
console.log("eligibility criteria using if else");
if(age >= 18){
   console.log("your eligible to Drive");
}
else{
   console.log("your not eligible to drive");
}

//ternary

console.log("ternary operator usage")

var resultofternary = (age >= 18) ? "eligible to drive" : "not eligible to drive";
console.log(resultofternary);