//JSON parse();
//Parsing a JSON Array
// Data written as an JSON array will be parsed into a JavaScript array.
const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myarr=JSON.parse(text);
console.log(myarr);
for(let i=0; i<myarr.length; i++){
    console.log(myarr[i]);
}

console.log();
//Imagine we received this text from a web server:
//'{"name":"John", "age":30, "city":"New York"}'

//Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
const text2 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(text2);