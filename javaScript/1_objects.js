//objects
//You can access object properties in two ways:
//objectName.propertyName;
//objectName["propertyName"];
//person.lastName;
//person["lastName"];

const myobj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullname : function() {
        return this.firstName + " " + this.lastName;
}
};
console.log(myobj.fullname());
let objfun = myobj.fullname();
console.log(objfun);
console.log();
//1st way
console.log(myobj.firstName);
console.log(myobj.lastName);
console.log(myobj.age);
console.log(myobj.eyeColor);

console.log();
//2nd way
console.log(myobj["firstName"]);
console.log(myobj["lastName"]);
console.log(myobj["age"]);
console.log(myobj["eyeColor"]);

console.log();
//3rd way
console.log(myobj);//{ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
console.log();