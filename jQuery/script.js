// // $(function(){}) short handed
// $(document).ready(function () {
//     $("button").click(() => {
//         let clr = $(".box").css("background-color");
//         console.log(clr)
//         $("#p3").css({ "color": clr, "background-color": "black"})

//     })
//     $("body").keydown(function (event) {
//         console.log(event.which)
//         if (event.which == 72) {
//             $('#p1').hide();
//         } if (event.which == 83)
//             $('#p1').show();
//     })
// })

// $(document).ready(function(){
// $("input").focus(function(){
//     $(this).css({"background-color":"red"})
// })
// $("input").blur(function(){
//     $(this).css({"background-color":"pink"})//""for white color
// })
// $("input").change(function(){
// console.log(($(this).val()))//""for white color
// })
// $("#sub-form").submit(function(event){
//     event.preventDefault();
//     console.log("successfully submited")
// })
// })

$(document).ready(function () {
    //     $("#data").load("some-text.txt",function(response,statusTxt,xhr){
    // console.log(statusTxt);
    // console.log(response);
    // console.log(xhr)

    // if(statusTxt === "success") alert("successfull");
    // if(xhr === "error") alert("error")
    $.get("https://jsonplaceholder.typicode.com/users",
        function (data, status) {
            console.log(data, status);
        })

    $.post("https://jsonplaceholder.typicode.com/users", {
        title: "this is title",
        body: "This Is Body"
    }, function(data, status) {
        console.log(data, status);
    })
       
    })

