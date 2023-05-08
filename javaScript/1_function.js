
//float
//  let float1 = parseFloat(10.2);
//  let float2 = parseFloat(20.2);
//  let float3 = parseFloat(30.1);


//  console.log((float1+float2));
//  console.log((float2+float3));
//  console.log((float3+float1));
 
//type - 1
// function fun(x,y){
//     let result = x+y;
//     console.log(result);
// }
// fun(10,20);

//type - 2

// const sum = (x,y) => {
// let result = x+y;
// console.log(result);
// }
// sum(10,20);

//type - 3

// const myfun = (x,y) => x+y;
// console.log(myfun(10,20));

// const myfun1 = (x,y) => x*y;
// console.log(myfun1(10,20));

// const myfun3 = (x,y) => x/y;
// console.log(myfun3(10,20));

//what is the use of function 
// without function

let a = 10;
let b = 21;

console.log("sum of a+b " + (a+b));
console.log("done");
console.log("sub of a-b " + (a-b));
console.log("done");
console.log("div of a/b " + (a/b));
console.log("done");
console.log("mul of a/b " + (a*b));
console.log("done");

//with function
console.log("with function");

function math(a,b){
    
    console.log(a+b);
    console.log("done");
    console.log(a-b);
    console.log("done");
    console.log(a/b);
    console.log("done");
   console.log(a*b);

}
console.log("first use");
math(10,21);
console.log("second use");
math(10,40);
console.log("third use");
math(20,20);
console.log("fourth use");
math(100,21);
console.log("fifth use");
math(10,400);
console.log("sixth use");
math(188,20);


