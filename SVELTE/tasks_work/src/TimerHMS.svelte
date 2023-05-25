<script>
    let id = "HHMMSS";
    setInterval(() => {
        var today = new Date();
        let time = document.getElementById("current-time");
        time.innerHTML = today.toLocaleTimeString();
    }, 1000);
</script>

<div id="t2">
    <h1>HHMMSS Timer</h1>
    <h1 {id} />
    <h1 id="current-time" />
</div>

<style>
    #t2 {
        border: 2px solid black;
        margin-top: 10px;
        display: inline-block;
    }
</style>
