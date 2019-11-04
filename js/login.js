
$(".login p").click(function(){
    $("header span").eq(0).css("display","none");
    $("header span").eq(1).css("display","block");
    $(".main1").css("display","none");
    $(".main2").css("display","block");
});

$(".register p").click(function(){
    $("header span").eq(0).css("display","block");
    $("header span").eq(1).css("display","none");
    $(".main1").css("display","block");
    $(".main2").css("display","none");
});

