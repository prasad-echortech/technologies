// Challenge 1: Promise Construtor
// console.log('start');
// let pro1 = new Promise((resolve, reject) => {
//     console.log(1);
// })
// console.log("end");

console.log("////////////////////////////////////////////");

// #2
// console.log('start');
// let pro2 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2)
// })
// pro2.then((res) => {
//     console.log(res);
// })
// console.log("end");

console.log("////////////////////////////////////////////");

// #3
// console.log('start');
// let pro3 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2)
//     console.log(3);
// })
// pro3.then((res) => {
//     console.log(res);
// })
// console.log("end");

console.log("////////////////////////////////////////////");

// #4
// console.log('start');
// let pro4 = new Promise((resolve, reject) => {
//     console.log(1);
//     // resolve("hiii");

// })
// pro4.then((res) => {
//     // console.log(res);
//     console.log(2);
// })
// console.log("end");

// #5
console.log('start');

let fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    resolve("Success");
}))

console.log("Middle");

fn().then((res) => {
    console.log(res);

})

console.log("end");
