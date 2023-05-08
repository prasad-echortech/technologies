//  taking input from user
const prompt=require("prompt-sync")({sigint:true}); 
var name = prompt("what is your name: ");
var age = prompt("how old are you: ");
console.log(" hai " + name + " age " + age);
