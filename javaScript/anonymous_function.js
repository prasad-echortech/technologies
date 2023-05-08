//The self-executing anonymous function is a special function which is invoked right after it is defined.
// There is no need to call this function anywhere in the script. 
//This type of function has no name and hence it is called an anonymous function. The function has a trailing set of parenthesis. 
//The parameters for this function could be passed in the parenthesis. 


//syntax
// (function (parameters) {
//     // Function body
// })(arguments);

//-----> 1
(function (par1 , par2){
    let result = (par1+par2);
    console.log(result);
})(100,100)
 
//------> 2

let show = function() {
    console.log("helllo world");
}
show();
show();

//--------> 3

 let funshow = (function (par1 , par2){
    let result = (par1+par2);
    console.log(result);
});

funshow(10,10);
funshow(20,10);

//-------> 4

 let person = {
    firstname : "sarella",lastname : "sai durga prasad", age : 23
 };

(function (){

    console.log(person.firstname)
    console.log(person.lastname)
    console.log(person.age)

})(person)
 