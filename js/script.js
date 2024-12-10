




$("#burgerButton").click(function(){
    $(".menu").css("display","flex");
})
$(".closeMenu").click(function(){
    $(".menu").css("display","none");
})


$(".reserve").click(function(){
    $(".reserveSection").css("display","none");
    let getFather = $(this).parent().parent().parent();
    let getElement = $(getFather).find(".reserveSection");
    $(getElement).css("display","flex")
})

$(".closeReserve").click(function(){
    $(".reserveSection").css("display","none");
})