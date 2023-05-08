function fun(){
const car_name = "BMW";
console.log(car_name); //declaring a variable locally
}
fun();
// fun();
// console.log(car_name); //accessing local variable from outside the function *error*

/*Since you cannot access a local variable from outside the function,
 you can have a variable of the same name in another function as well.*/

 function fun1(){
    const car_name = "polo GT";
    console.log(car_name);
 }
 fun1();