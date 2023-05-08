//toUpperCase and toLowerCase

let anytext = "sarella SAI DuRgA PrASaD";

//toUpperCase
console.log(anytext.toUpperCase());

//toLowerCase
console.log(anytext.toLowerCase());

//converting function data into uppercase and lowercase
const myobj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullname: function () {
        return (myobj.firstName + " " + myobj.lastName).toLowerCase();
    },
    fulldetails: function () {
        return (myobj.firstName + " " + myobj.lastName + " " + myobj.age + " " + myobj.eyeColor).toUpperCase();
    }
}

console.log(myobj.fullname());//changed to toLowerCase
console.log(myobj.fulldetails());//changed toUpperCase