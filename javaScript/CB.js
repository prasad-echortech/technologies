/*

// callback exampple
function step1(value, callback) {
    callback(value + 10, false)
}
function step2(value, callback) {
    callback(value + 10, true)
}
function step3(value, callback) {
    callback(value + 10, false)
}

step1(10, function (result1, error) {
    if (!error) {
        step2(result1, function (result2, error) {
            console.log(result2)
            if (!error) {
                step3(result2, function (result3, error) {
                    console.log("result :" + result3);
                })
            }
        })
    }
})

// #1 solutions for callback hell
// writting comments
// --> passing 10 as the initial value to step 1
// --> if there is no error ? then passsing the value to step 2
// if there is no error again , then passing the result to step 3
// --> finally printinfg the result.

//#2 split callbacks into simpler functions

step1(10, function (result1, error) {
    if (!error) {
        return result1;
    }
})
function step1(value, callback) {
    let result1 = callback(value + 10, false);
    step2(result1, function (result2, error) {
        if (!error) {
            return result2;
        }
    })
}
function step2(value, callback) {
    let result2 = callback(value + 10, false);
    step3(result2, function (result3, error) {
        if (!error) {
            return result3;
        }
    })
}
function step3(value, callback) {
    let result3 = callback(value + 10, false);
    console.log(result3);
}
*/
/*
// #3 promises
function step1(value, error) {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve(value + 10)
        } else {
            console.log("step1's value : " + value)
            reject("something went work");
        }
    })
}

function step2(value, error) {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve(value + 10);
        } else {
            console.log(`step2's value :  ${value}`)
            reject("something went wrong")
        }
    })
}

function step3(value, error) {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve(value + 10);
        } else {
            console.log("step3's value : " + value)
            reject("something went wrong")
        }
    })
}
step1(10, false)
    .then((result1) => step2(result1, false))
    .then((result2) => step3(result2, false))
    .then((result3) => console.log(result3))
    .catch((error) => console.log(error))
*/

//promise methods
//Promise.all([Promises])
const p1 = Promise.resolve("like if understood callback");
const p2 = 100;
const p4 = Promise.reject("rejected")
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "subscribe for more updates");
})

Promise.all([p3,p2,p2,p4]).then((values) => console.log(values));
// Promise.allSettled([p1, p2, p3]).then((values) => console.log(values));
// Promise.race([p4,p2,p1,p3]).then((values) => console.log(values));
// Promise.any([p3,p2,p1]).then((values) => console.log(values));

/*
//fetching data from Api
fetch("https://api.github.com/users")
.then((res) => res.json())
.then((result) => console.log(result));
*/

//issues of promises is chaining it is also complex
//to overcome that async and await is there
//makes promises easier to write
// async makes a function return a promise
// await makes a function wait for a promise

//#1
// async function myFun() {
//     return "hello world";
// }

/*
async function myFun(status) {
    let proStatus = status;
  return new Promise((resolve, reject) => {
if(proStatus == true){
    resolve("Hello World");
}else{
 reject("error")
}
  })
}

myFun(false).then((value , ) => {
    console.log(value)
}).catch((error) => {
    console.log("error for helloworld")
})
*/

//#2
// async function proFun() {
// let myPromise = new Promise(function (resolve, reject) {
//     resolve("iam async promise")
// })
// console.log(await myPromise);
// }

//#3
// let getData = async() => {
// var data = "helloWorld";
// return data
// }
// getData().then(data => console.log(data))


// #4
// let getData1 = async() => {
//     var data = await "hello World";
// console.log(data);
// }
// console.log(1);
// getData1();
// console.log(2);