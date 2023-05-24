//constructors

// class House {
//     constructor(color) {

//         this.color = color;

//     }

//     houseInfra() {
//         return "sofa"
//     }
// }
// let houseObj = new House("pink");
// let houseObj2 = new House("yellow");

// console.log(houseObj.color);
// console.log(houseObj.houseInfra());

// console.log(houseObj2.color);
// console.log(houseObj2.houseInfra());

//parms less
// function Mobile() {
//     this.model = "redmi 9a";
//     this.price = function() {
// console.log(`model number ${this.model} and the price is : 9000`);
//     }
// }

// let mobileDetails =  new Mobile();
// mobileDetails.price();

//parameterized
// function Mobile1(model ,rate) {
//     this.model = model;
//     this.rate = rate
//     this.price = function() {
// console.log(`model number ${this.model} and the price is :${this.rate}`);
//     }
// }

// let mobile_Details1 =  new Mobile1("nokia C3" , 1000000);
// let mobile_Details2 =  new Mobile1("iphone 12Pro" , 9999999999);
// mobile_Details1.price();
// mobile_Details2.price();

class Mobile1{
    constructor(model, rate){
    this.model = model;
    this.rate = rate
    this.price = function() {
console.log(`model number ${this.model} and the price is :${this.rate}`);
    }
}
}

let mobile_Details1 =  new Mobile1("nokia C3" , 1000000);
let mobile_Details2 =  new Mobile1("iphone 12Pro" , 9999999999);
mobile_Details1.price();
mobile_Details2.price();



