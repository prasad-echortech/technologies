///truthy and falsy values

function myfun(val){
    if(val){
        console.log("truthy val");
    }else{
        console.log("falsy val");
    }
}

console.log("falsy values");
console.log()
let mynameis; //undefined variable
myfun(0); //falsy val
myfun(""); //falsy val
myfun(mynameis); //falsy val //undefined //let mynameis;
myfun(false); //falsy val
myfun(null); //falsy val
myfun(-0); //falsy val

console.log()
console.log("truthy values");
console.log()

myfun(" "); //truthy val
myfun([]); //truthy val
myfun({}); //truthy val
myfun(true); //truthy val
myfun(1); //truthy val
myfun(4); //truthy val
myfun(9); //truthy val
myfun(-2); //truthy val
myfun(-99); //truthy val
