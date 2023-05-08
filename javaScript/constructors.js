// JavaScript Object Constructors

function Person(first, last, age, eye){//parms 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

const newobj = new Person("sai","sarella",24,"pink" )//args
console.log("my name is " +newobj.firstName+ " -- " +newobj.lastName);

//---------------------------------------------

function family(first1, last1, age1, eye1){
    this.firstName = first1;
    this.lastName = last1;
    this.age = age1;
    this.eyeColor = eye1;
}

let myFather = new  family("chittibabu" , "sarella" , 40 , "brown");
let myMother = new  family("venkatalakshmi" , "sarella", 40 , "brown");


// Adding a Property to an Object
// Adding a new property to an existing object is easy:

myFather.nationality = "indian";
myFather.favfood = "chicken curry";
myMother.nationality = "indian";
myMother.favfood = "mutton";

console.log(myFather);
console.log(myMother);

//Adding a Method to an Object
//Adding a new method to an existing object is easy:

myFather.name = function(){
return ( "myFather loves "+ this.favfood+ " and he is " +this.nationality);
}
console.log(myFather.name());

myMother.name = function(){
    return ( "myMother loves "+ this.favfood+ " and she is " +this.nationality);
}
console.log(myMother.name());


