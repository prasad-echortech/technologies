// Stringify Functions
// JSON.stringify will not stringify functions:/

const person = {
    name: "John",
    surname : "sarella",
    today: new Date(),
    age : function(){return 30;}
  };
  let myString1 = JSON.stringify(person);
  console.log(myString1);

//   This can be "fixed" if you convert the functions into strings before stringifying.
//   toString();
person.age = person.age.toString();

let myString2 = JSON.stringify(person);
console.log(myString2);
