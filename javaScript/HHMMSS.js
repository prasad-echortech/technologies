//hours minutes and seconds

setInterval(() => {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    document.querySelector('#HHMMSS').innerHTML = hour + " : " + minute + " : " + second;
}
    , (1000)

)

//----------------------------------------------

setInterval(()=>{
    var today = new Date();
    let time = document.getElementById('current-time');
    time.innerHTML = today.toLocaleTimeString();
},(1000))




