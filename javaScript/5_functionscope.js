/* With the creation of each new function, it creates a new scope in JavaScript. You cannot access
   variables defined inside a function from outside the function or from another function.
   Var, let, and const work similarly when used inside a function.  */

function mufun() 
{
    var fruit = "apple";
    let sport = "ball";
    const animal = "cat";
}
console.log(fruit);
console.log(sport);
console.log(animal);

function myfun2()
{
    console.log(fruit);
    console.log(sport);
    console.log(animal);
}