$(document).ready(function () {
    let offset = { offset: "80%" }
    $(".toc").waypoint
        (function () {
            // console.log("iam started");
            $(".toc").
                addClass("animate__animated animate__tada");
        }, offset);

    $(".wthtml").waypoint(function () {
        $(".wthtml").addClass("animate__animated animate__backInRight")
    }, offset)

    $(".link1").waypoint
        (function () {
            $(".link1").
                addClass("animate__animated animate__tada");
        }, offset);
    $(".link2").waypoint
        (function () {
            $(".link2").
                addClass("animate__animated animate__tada");
        }, offset);
    $(".link3").waypoint
        (function () {
            $(".link3").
                addClass("animate__animated animate__tada");
        }, offset);

});
    // {offset:"80%"}
