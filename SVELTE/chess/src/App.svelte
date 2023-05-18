<style>
	* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgb(105, 94, 94);
}

.board {
    display: flex;
    flex-wrap: wrap;
    height: 500px;
    width: 500px;

}

.piece {
    height: 62.5px;
    width: 62.5px;
    text-align: center;
    position: relative;
}

img {
    height: 60px;
    width: 48px;
    position: relative;
}

.move {
    height: 20px;
    width: 20px;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}

.turn {
    position: absolute;
    top: 10px;
    font-size: 30px;
    color: rgb(208, 255, 0);
}

.numbers {
    display: flex;
    flex-direction: row;

}

.num {
    height: 62.5px;
    width: 62.5px;
    align-items: center;
    color: white;
    text-align: center;
}

.alp {
    height: 30.5px;
    width: 62.5px;
    align-items: center;
    color: white;
    text-align: center;
}

.alp2 {
    height: 30.5px;
    width: 62.5px;
    align-items: center;
    color: white;
    text-align: center;
    padding: 15px;
    ;
}
</style>










<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>8x8 Chess|Board</title>
    <!-- styelsheet -->
    <link rel="stylesheet" href="/8x8ChessBoard.css">
</head>

<body>

    <div class="alpha">
        <div class="num">1</div>
        <div class="num">2</div>
        <div class="num">3</div>
        <div class="num">4</div>
        <div class="num">5</div>
        <div class="num">6</div>
        <div class="num">7</div>
        <div class="num">8</div>
    </div>

    <div class=box>
        <br>
        <div class="numbers">
            <div class="alp">a</div>
            <div class="alp">b</div>
            <div class="alp">c</div>
            <div class="alp">d</div>
            <div class="alp">e</div>
            <div class="alp">f</div>
            <div class="alp">g</div>
            <div class="alp">h</div>
        </div>

        <div class="board"></div>

        <div class="numbers">
            <div class="alp2">a</div>
            <div class="alp2">b</div>
            <div class="alp2">c</div>
            <div class="alp2">d</div>
            <div class="alp2">e</div>
            <div class="alp2">f</div>
            <div class="alp2">g</div>
            <div class="alp2">h</div>
        </div>
        <br>
        Enter Move:
        <input type="text" id="move" maxlength="4" style="width:62%;border:5px solid green" />
        <input type="submit" value="Submit" onclick="formdata()" style="color:white;background-color: green;" />
    </div>

    <div class="alpha">
        <div class="num">1</div>
        <div class="num">2</div>
        <div class="num">3</div>
        <div class="num">4</div>
        <div class="num">5</div>
        <div class="num">6</div>
        <div class="num">7</div>
        <div class="num">8</div>
    </div>
    <div class="turn">White's turn</div>

    <!-- script tag -->
    <script src="/assets/js/8x8ChessBoard.js"></script>
    <!-- web socket -->


</body>

</html>