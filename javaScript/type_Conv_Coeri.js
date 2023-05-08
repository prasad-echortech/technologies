// type conversion

let age = "1999";
const currentYear = "2023";
let message = "hello";
const number = '90';
console.log(age, currentYear, message);
console.log(Number(currentYear) - Number(age));
console.log(typeof age);
console.log(typeof currentYear);
console.log(typeof message);
console.log(Number(message)); //NaN
console.log(typeof NaN) //weird
console.log(String(number), 23)


//type coerecison

console.log("iam " + 23 + " years old");
console.log("23" - "10" - 3);
console.log('23' + "10" + 3);
console.log('23' + '10' - 3);
console.log("10" * "10");
console.log("10" / "10");
console.log("10" % "10");

let n = "1" + 1;//11
n = n - 1;//11-1 = 10
console.log(n);//10

console.log(10+5+20+"5");//355
console.log(10+5+20-"5");//30
console.log("10"-"4"-"3"-2+"5");//15
console.log("10"-"4"-"3"-2-"5");//-4


