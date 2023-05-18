//document.getElementsByClassName
let lists = document.getElementsByClassName('list-items');

console.log(lists);

//changing lists data
lists[0].textContent = "Coco";
lists[1].textContent = "Rugby";
lists[3].textContent = "Hockey";

//changing lists colors

lists[0].style.color = "red";
lists[1].style.color = "green";
lists[2].style.color = "blue";
lists[3].style.color = "orange";

//changing background color

// lists[0].style.backgroundColor = "black";
// lists[1].style.backgroundColor = "pink";
// lists[2].style.backgroundColor = "yellow";
// lists[3].style.backgroundColor = "purple";

//changing background color

for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = "yellow";
}

//changing innerHTML lists




//-----------------------------------------------------------

//document.getElementsByTagName
let ulli = document.getElementsByTagName("li");


//changing lists data
ulli[0].textContent = "Kick-Boxing";
ulli[1].textContent = "Kung-Fu";
ulli[2].textContent = "Karate";
ulli[3].textContent = "Take-Wand";

//changing lists colors

ulli[0].style.color = "red";
ulli[1].style.color = "pink";
ulli[2].style.color = "black";
ulli[3].style.color = "yellow";

//changing background color

// lists[0].style.backgroundColor = "#9317A7";
// lists[1].style.backgroundColor = "#2868FF";
// lists[2].style.backgroundColor = "#27CA21";
// lists[3].style.backgroundColor = "#B4CA21";

//changing background color

for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = "#9317A7";
}