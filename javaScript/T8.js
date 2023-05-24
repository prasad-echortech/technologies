let myinterval;
$("#bt1").click(function () {
    const fun2 = function (a, b) {
        // alert("iam setInterval : " + (a + b));
        console.log("iam setInterval : " + (a + b));
    }
    myinterval = setInterval(fun2, 1000, 30, 40);
});

$("#bt2").click(function () {
    clearInterval(myinterval);
})

//-------------------------------------

let myinterval1;
$("#bt3").click(function () {

    const fun3 = function (a, b) {
        console.log("iam setTimeout : " + (a + b));
    }
    myinterval1 = setTimeout(() => fun3(30, 40), 1000);
});

$("#bt4").click(function () {
    clearTimeout(myinterval1);
})