// parseInt
// parseFloat

let myint = 23;
let mystrint = "23";
let address = "204 vijay nagar colony";
let myfloat = 6.66;
let mystrfloat = "208.209.2010.2011.2012";
let cost = "12.89 per box";

//parseInt
console.log(parseInt(mystrint));//"23" --> 23
console.log(parseInt(address));//"204 vijay nagar colony" --> 204
console.log(parseInt(myfloat)); // 6.66 --> 6
console.log(parseInt(mystrfloat)); // "208.209.2010.2011.2012" --> 208
console.log(parseInt(cost));//"12.89 per box"--> 12

//parseFloat

console.log(parseFloat(mystrfloat));//"208.209.2010.2011.2012" --> 208.200
console.log(parseFloat(cost)); // "12.89 per box" --> 12.89
console.log(myfloat);