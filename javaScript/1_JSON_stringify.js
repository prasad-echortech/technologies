// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  console.log(typeof person);//object

  console.log(typeof person.age);//number

let myString = JSON.stringify(person);
console.log(myString); //string


console.log(typeof myString);

