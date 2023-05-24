"use strict"

let myarr = [
    { name: "bike", price: 100 },
    { name: "car", price: 90 },
    { name: "ship", price: 10 },
    { name: "cycle", price: 89 },
    { name: "plane", price: 40 },
    { name: "choper", price: 30 },
    { name: "rocket", price: 70 },
    { name: "boeing", price: 1000 },
    { name: "bullet", price: 100 },
]
let arr = [1, 2, 3, 4.5, 6, 7, 8, 9]
console.log(myarr);
// let filter = myarr.filter((data) => {
//     return data.price < 100
// })
// console.log(filter);

// let map = myarr.map((data) => {
//     return data.name
// })
// console.log(map);

// let find = myarr.find((data) => {
//     return data.name === "choper"
// })
// console.log(find);

// let fe = myarr.forEach(data => {
//   console.log(data.name);
// });

let inexp = myarr.some(data => {
    return data.price < 100
});
console.log(inexp);

// let inexpensive = myarr.every(data => {
//     return data.price >= 10
// });
// console.log(inexpensive);

// let reduceMethod = myarr.reduce((currentTotal , item) => {
//     // console.log(currentTotal);
//     return item.price + currentTotal
// },0);
// console.log(reduceMethod);

// let includes = arr.includes(1)

// console.log(includes);
