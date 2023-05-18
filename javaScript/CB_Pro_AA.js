// synchronous programming

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// asynchronous programming

console.log("1");
setTimeout(() => {
    console.log("2")
    calculate();
}, 10000);
console.log("3");

console.log("1");
console.log("2");
console.log("3");

console.log("5");

function calculate() {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        sum += i
    }
    console.log(sum)
}