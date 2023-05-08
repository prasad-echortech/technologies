//objects
//1
let myobj = {
    fname: "sai durga prasad",
    lname: "sarella",
    age: 23,
    qualification: "B-tech",
    branch: "cse",
    cgpa: 6.666
}
console.log(myobj);
/**{
   fname: 'sai durga prasad',
   lname: 'sarella',
   age: 23,
   qualification: 'B-tech',
   branch: 'cse',
   cgpa: 6.666
 } */

//2

for (let objres in myobj) {
    console.log(myobj[objres]);
}
/**
sai durga prasad
sarella
23
B-tech
cse
6.666
 */

//3

const myobj2 = { name: "prasad", "age": 23 };

for (let res4 in myobj2) {
    console.log(myobj2[res4]);
}

