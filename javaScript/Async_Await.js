async function pro() {
    let delhiWeather = new Promise((Resolve, Reject) => {
        setTimeout(() => {
            Resolve("27 Deg");
        }, 1000)
    })
    let newYorkWeather = new Promise((Resolve, Reject) => {
        setTimeout(() => {
            Resolve("50 Deg");
        }, 2000)
    })
    console.log("fetching delhi weather please wait");
    let dW = await delhiWeather;
    console.log("fetched delhi weather " + dW);
    console.log("fetching newYork Weather  please wait");
    let nW = await newYorkWeather;
    console.log("fetched newYork weather " + nW);
}
const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}
const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await pro();
    let b = await cherry();
}
main1()

// async function myFunction() {
//     return "hello"
// }
// function myFunction() {
//     return Promise.resolve("hello");
// }
// myFunction().then(
//     function (value) {
//         console.log("Success")
//     },
//     function (error) {
//         console.log("Failure")
//     }
// );


