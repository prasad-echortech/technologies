

// const fun1 = function (a, b) {
//     alert("iam setTimeout : " + (a + b));
//     console.log("iam setTimeout : " + (a + b));
// }
// setTimeout(fun1, 1000, 10, 10);

// const fun2 = function (a, b) {
//     alert("iam setInterval : " + (a + b));
//     console.log("iam setInterval : " + (a + b));
// }
// setInterval(fun2, 2000, 30, 40);

//-------------------------------------------------------

//clearTimeout

let fun3 = setTimeout(function(){
    alert("iam property of setTimeout");
},(1000)
)
let a = prompt("do you want run setTimeout (Y/N)");

if(a === "N"){
clearTimeout(fun3);
}else{
    console.log("ok iam now running")
}

//clearInterval

let fun4 = setInterval(function(){
    alert("iam property of setInterval");
},(1000)
)
let a1 = prompt("do you want run setInterval (Y/N)");

if(a1 === "N"){
clearInterval(fun4);
}else{
    console.log("ok iam now running")
}