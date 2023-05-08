// create div
var newDiv = document.createElement('div');
// console.log(newDiv);

//add class
newDiv.className = "box";
// console.log(newDiv);


//add id
newDiv.id = "textbox";
// console.log(newDiv);


//create text node
var newDivTextNode = document.createTextNode("iam sarella sai durga prasad who created this");


//add text to div
newDiv.append(newDivTextNode);
// console.log(newDiv);

var container = document.querySelector('#container');
var form = document.querySelector('#form');
container.insertBefore(newDiv, form);

//--------------------------------------------------------------

