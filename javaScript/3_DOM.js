//querySelector
//querySelectorAll

var headtitle = document.querySelector('#h-title');
headtitle.style.color = "red";



//------------------------------------------------------------
// var items1 = document.querySelectorAll('.list-items');
// items1[0].style.color = "#D712C4";
// items1[1].style.color = "green";
// items1[2].style.color = "blue";
// items1[3].style.color = "orange";
// for(var i = 0; i<items1.length; i++){
//     items1[i].color = "red";
// }

 //---------------------------------------------------------------

// var items2 = document.querySelector('.list-items');
// items2.style.color = "red";//querySelector it only selects first

//-----------------------------------------------------------------
//querySelector it only selects first
//to sort it out we need to use psudo classes and psudo selectors

// var items3 = document.querySelector('.list-items:last-child');
// items3.style.color = "red";

// var items3 = document.querySelector('.list-items:nth-child(2)');
// items3.style.color = "green";

/*var items4 = document.querySelector('.list-items:nth-child(4)');
items4.style.color = "red";
items4.style.backgroundColor = "yellow";*/

var items5 = document.querySelectorAll('.list-items');
items5[1].style.color = "red";
items5[0].style.backgroundColor = "yellow";


//querySelector it only selects first list item what if , we want to select another item
//it is not also working lists[2]etc....
//copy pasting the same code it wont work
//to sort it out we need to use psudo classes and psudo selectors "last-child"

//----------------------------------------------------

var input = document.querySelector('input');
input.value = 'Enter Your Name Boss';
 
var button = document.querySelector('input[type="submit"]');
button.style.backgroundColor = "yellow";
button.style.color = "black";
button.value = "SEND";
