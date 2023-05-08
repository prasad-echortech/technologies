
'use strict'
function math() {
    console.log(20 + 30 + 100);
}
math();

function math1(a, b, c) {
    console.log(a + b + c);
}
math1(100, 200, 3000);

function allMath(a, b) {
    console.log("hello result is returned");
    const result = `${a + b} and ${a - b} and ${a * b}`;
    return result
}

const result = allMath(5, 5);
console.log(result)
console.log(allMath(10,10))

console.log()

console.log("arrow functions =>")
// #1
let af1 = () =>1+1 
console.log("1 type")

let af2 = () =>{
    console.log("2 type");
   return  2+2 

}

 let afr1 = af1()
 console.log(afr1)

 let afr2 = af2()
 console.log(afr2)

//  \\------------------------------

function isPositive(number){
return number >= 0
}
let positiveRes = isPositive(-100);
console.log(positiveRes);

//arrow fun

let isPositive1 = number => number >= 0;

let positiveRes2 = isPositive1(100);
console.log(positiveRes);


//-------------------------------------
let randRes = rand();
console.log(randRes)
//hoisting 
function rand(){
    return Math.random();
}


//arrow =>

let rand1 = ()=> Math.random();

let randRes2 = rand1();
console.log(randRes2);

//--------------------------------
// document.addEventListener('click',function(){
// console.log('click')
// })

//arrow
// document.addEventListener('click', ()=>console.log('click'))

//un notice functions
console.log("hai bro");
const str = String('900')
console.log(str)

//function Declaration
function calcAge1(birthYear){
    return 2023 - birthYear
}
 let cal = calcAge1(1996)
 console.log(`my age is ${cal}`)

 //function Expression
const calcAge2 = function(birthYear){
    return 2023 - birthYear
}
let cal2 = calcAge2(1999);
console.log(`my age is ${cal2}`)