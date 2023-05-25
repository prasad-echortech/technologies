<script>
    var countDownDate = new Date("Dec 20 , 2023 00:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdowntimer").innerHTML = "***Boom***";
        }
    }, 1000);
</script>

<div
    id="time "
    class="d-flex justify-content-center align-items-center countdowntimer">
    <p id="day" />
    <h3>d :</h3>
    <p id="hours" />
    <h3>h :</h3>
    <p id="minutes" />
    <h3>m :</h3>
    <p id="seconds" />
    <h3>s</h3>
</div>

<div class="col-3">
    <div class="">
        <div id="day" />
        <div id="hours" />
        <div id="minutes" />
        <div id="seconds" />
    </div>
</div>

<style>
    .countdowntimer {
      
        border: 2px solid red;

        width:400px;
        display: flex;
        justify-content: space-between;
        font-size: 40px;
        margin-top: 10px;
        color: rgb(0, 0, 0);
        margin-bottom: -10px;
        font-weight: bold;
        background: -webkit-linear-gradient(
            270deg,
            rgb(233, 172, 18) 10%,
            rgb(149, 70, 5) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
