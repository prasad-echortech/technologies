//for in --> arrays: index based iteration  console.log(res); // 0 1 2 3 4 
console.log("for in arrays");

const myarr = [45, 4, 9, 16, 25];

for (let res in myarr) {
  // console.log(res); // 0 1 2 3 4 
  console.log(myarr[res]); //45, 4, 9, 16, 25
}
// for of --> not index based
console.log("for of arrays");

const myarr1 = [45, 4, 9, 16, 25];

for (let res1 of myarr1) {
  console.log(res1);
}

//for in --> works for complex objects
console.log("for in objects");

const myobj1 = { name: "prasad", age: 23 };

for (let res3 in myobj1) {

  console.log(myobj1[res3]);
}
// for of -->object: works for iterables
console.log("for of objects");

const myobj2 = { name: "prasad", "age": 23 };

for (let res4 of myobj2) {
  console.log(myobj2);
}