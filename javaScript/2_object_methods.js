//accessing the object methods
const myobj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullname: function () {
        return myobj.firstName + " " + myobj.lastName;
    },
    fulldetails: function () {
        return myobj.firstName + " " + myobj.lastName + " " + myobj.age + " " + myobj.eyeColor;
    }
};

console.log(myobj);

/**{
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    fullname: [Function: fullname]
  }*/

//accessing only fullname
console.log(myobj.fullname());

//printing fulmethod through variable
let myobjfullname = myobj.fullname();
console.log(myobjfullname);

//accessing total data
console.log(myobj.fulldetails());

//printing fulldetails method through variable
let myobjFullDeatails = myobj.fulldetails();
console.log(myobjFullDeatails);

