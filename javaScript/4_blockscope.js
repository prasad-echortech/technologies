{
    let car_name = "Kia Crnival";//declare a variable within a block
    console.log(car_name);//accessing a variable with in the block
}
console.log(car_name); //accessing the variable from outside

//block scope does'not work with var keyword

{
    var a="BMW";
    let b="Audi";
    const c="MG";
}
console.log(a);
console.log(b);
console.log(c);