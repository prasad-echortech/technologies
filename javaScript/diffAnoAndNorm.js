//difference between normal and anonymous functions


//normal function
normalfun();
function normalfun(){
    console.log("normal function supports hoisting");
}

//anonymous function

// anonymous();//ReferenceError: Cannot access 'anonymous' before initialization
let anonymous = (function (){
    console.log("Anonymous function does not support Hoisting");
})
anonymous();

//arrow function

// arrow(); //ReferenceError: Cannot access 'arrow' before initialization
let arrow = ()=> console.log("arrow function does not support hoisting");
arrow();
