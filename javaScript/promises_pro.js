// let p = new Promise((resolve, reject) => {
//     //my promise
//     let a = 1 + 2;
//     if (a == 2) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// })
// p.then((message) => {
//     console.log("this is in then " + message);
// })
//     .catch((message) => {
//         console.log("this is in the catch " + message)
//     })

// const userLeft = true;
// const userWatchMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: "User Left", message: ':('
//         })
//     } else if (userWatchMeme) {
//         errorCallback({
//             name: "User Warching Meme", message: "teluguBadi :)"
//         })
//     } else {
//         callback('Thumbs up and Subscribe');
//     }
// }
// watchTutorialCallback((message) => {
//     console.log('success : ' +message);
// },(error) => {
//     console.log(error.name + " " + error.message)
// }
// )

const userLeft = false;
const userWatchMeme = true;
function watchTutorialPromise(){
    return new Promise((resolve , reject) => {
        if(userLeft){
            reject({
                name:'User Left',
                message : ':('
            })
        }else if(userWatchMeme){
            reject({
                name : "user watching meme",
                message : 'WebDevSimplified :)'
            })
        }else{
            resolve("Thumbs up and Subscribe");
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success : ' +message)
}).catch((error) => {
console.log("iam reject here :( " +error.name + ' ' +error.message);
})