//taking input from user with the help of forms and storing that into object and printing that in console?

// let forms = document.getElementById("forms");
// forms.style.backgroundColor = "green";
// forms.style.textAlign = "center";

let button = document.getElementById('button');
button.style.backgroundColor = "red";
button.style.color = "white";

//--------------------------------------------------

const form = document.querySelector('form');
form.addEventListener('submit' , (e) =>{
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);

    const json = JSON.stringify(obj);
localStorage.setItem('form',json);

//another html file
window.location.href = "success.html";
})