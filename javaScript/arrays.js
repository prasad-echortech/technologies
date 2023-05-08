//arrays

// JavaScript new Array()
// JavaScript has a built-in array constructor new Array().

// But you can safely use [] instead.

// These two different statements both create a new empty array named points:
//example
// const points = new Array();
// const points = [];


//with arrays
// const myarray0= [1,2,3,4,5,6,7,8,9];

//without arrsys
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let g = 7;
let h = 8;

//what if three hundered values are there simple 300 variables we need to create

//but with arrys 
// const myarray1 = [1,2,3,4,5,6,7,8,9.......,300];

//---------------------------------------------------------------------------------------------------------
//creating an array
//const array_name = [item1, item2, ...];      

//1) 
console.log();
const myarray0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//accessing array elements
console.log("length of myarray0 is " + myarray0.length);
//The length property is always one more than the highest array index. //8 //length-->9
console.log(myarray0[0]);
console.log(myarray0[1]);
console.log(myarray0[2]);
console.log(myarray0[3]);
console.log(myarray0[4]);
console.log(myarray0[5]);
console.log(myarray0[6]);
console.log(myarray0[7]);
console.log(myarray0[8]);
console.log();

//2)

console.log();
const myarray1 = []
myarray1[0] = "sarella",
    myarray1[1] = "sai",
    myarray1[2] = "nani",

    console.log("length of myarray1 is " + myarray1.length);
//The length property is always one more than the highest array index. //2 //length-->3
//accessing array elements
console.log(myarray1[0]);
console.log(myarray1[1]);
console.log(myarray1[2]);
console.log();

//3)

console.log();
const myarray2 = new Array("BMW","koeinseg","Merc");
//accessing array elements
console.log(myarray2[0]);
console.log(myarray2[1]);
console.log(myarray2[2]);
console.log();

// 4)
console.log();
const myarray3 = [32, 10, 76, 88, 46];
myarray3.push("sarella","sai","abraham","babylon");
console.log(myarray3.sort(), 'hi'); // here sort() it returns array values and modifies them

console.log(myarray3);
console.log();

//5)

console.log();
// Adding elements with high indexes can create undefined "holes" in an array.
const myarray4 = [1,2,3];
myarray4[6] = 4;
console.log(myarray4);

//6
console.log();
const fruits = ["apple","banana","berry"];

fruits[fruits.length] = "lemon";
fruits[4] = "melon";
fruits.push("musk-melon");
console.log(fruits);
console.log();
//-------------------------------------------------------------------------------------------------

// WARNING !!
// If you use named indexes, JavaScript will redefine the array to an object.

// After that, some array methods and properties will produce incorrect results.
console.log();
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length);   // Will return 0
console.log(person[0]);    // Will return undefined

// If you use named indexes, JavaScript will redefine the array to an object.
console.log(person);//[ firstName: 'John', lastName: 'Doe', age: 46 ]
console.log();

// The Difference Between Arrays and Objects

// In JavaScript, arrays use numbered indexes.  0,1,2,3.....;
// In JavaScript, objects use named indexes.    firstname:...,secondname:....;

//accessing array values using loops

console.log("array elemnets are using for loop");
for(let i = 0; i < myarray0.length; i++){
    console.log(myarray0[i]);
}

//usig while loop
console.log("array elemnets are using while loop");
let i = 0;
while(i < myarray0.length){
    console.log(myarray0[i]);
    i++;
}



