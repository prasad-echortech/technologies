// $("p#p1").hide();
$("button").click(()=>{
   return  $("#p1").hide();
})
$("body").keydown(function (event){
console.log(event.which)
if(event.which == 72){
    $('#p1').hide();
}if(event.which == 83)
$('#p1').show();
})
