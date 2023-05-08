// printing even odd numbers by taking user input
const prompt=require("prompt-sync")({sigint:true}); 
var number = prompt("enter any number ");
if(number%2 == 0){
    console.log("even number:");
}else{
    console.log("odd number: ");
}

console.log("****************************");

var number1 = prompt("enter any number ");
var sum=0;
for(let i = 0; i <= number1; i=i+2){
    console.log("even numbers are " +i);
    sum=sum+i
}
console.log("---sum of even numbers are---:" +sum);
 var sum1=0;
for(let i = 1; i <= number1; i=i+2){
    sum1=sum1+i
    console.log("odd numbers are " +i);
}
console.log("---sum of odd numbers are---:" +sum1);
