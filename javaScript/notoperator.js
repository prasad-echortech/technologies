//not ! operator along with boolean
 
let age = 20;
// let diseas = false; // !diseas --> true
// let diseas = true; // !diseas --> false
let diseas = false;
if(age > 30 || !diseas){
    console.log("young");
}
else 
{
    console.log("not young");
}