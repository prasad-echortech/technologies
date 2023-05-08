// JSON.stringify converts dates into strings:
const person = {
    name: "John",
    today: new Date()
  };
   let myString = JSON.stringify(person);
   console.log(myString); //{"name":"John","today":"2023-04-04T07:40:37.120Z"}

//------------------------------------------------------------------------------------------------------------------

   //normal object look a like
   const person1 = {
    name: "John",
    today: new Date()
  };
  console.log(person); //{ name: 'John', today: 2023-04-04T07:41:52.260Z }