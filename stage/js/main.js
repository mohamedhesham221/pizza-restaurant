$(function(){

    // function to make #menu fade in and logo & time fade out and another nav-link disabled
$("#menu").on("click", function(){
    $(".logo").fadeOut(400, function(){
        $(".menu-p").fadeIn(400, function(){
            $("#menu").siblings().addClass("disabled")
            $("#about .nav-link, #contact .nav-link").css("color","#000000")
        })
    })
    $(".time").fadeOut(400)
})

//function to close menu page and logo & time fade in 
$("#close1").on("click", function(){
    $(".menu-p").fadeOut(400, function(){
        $(".logo").fadeIn(400)
        $("#menu").siblings().removeClass("disabled")
        $("#about .nav-link, #contact .nav-link").css("color","#EBEBEB")
       $("#about .nav-link").hover(function(){$("#about .nav-link").css("color","#d11c1c")},function(){$("#about .nav-link").css("color","#EBEBEB")})
       $("#contact .nav-link").hover(function(){$("#contact .nav-link").css("color","#d11c1c")},function(){$("#contact .nav-link").css("color","#EBEBEB")})

    })
    $(".time").fadeIn(400)
}).css("cursor","pointer")

 // function to make #about fade in and logo & time fade out and another nav-link disabled
$("#about").on("click", function(){
    $(".logo").fadeOut(400, function(){
        $(".about-p").fadeIn(400,function(){
            $("#about").siblings().addClass("disabled")
            $("#menu .nav-link, #contact .nav-link").css("color","#000000")
        })
    })
    $(".time").fadeOut(400)
})

//function to close about page and logo & time fade in 
$("#close2").on("click", function(){
    $(".about-p").fadeOut(400, function(){
        $(".logo").fadeIn(400)
        $("#about").siblings().removeClass("disabled")
        $("#menu .nav-link, #contact .nav-link").css("color","#EBEBEB")
        $("#menu .nav-link").hover(function(){$("#menu .nav-link").css("color","#d11c1c")},function(){$("#menu .nav-link").css("color","#EBEBEB")})
        $("#contact .nav-link").hover(function(){$("#contact .nav-link").css("color","#d11c1c")},function(){$("#contact .nav-link").css("color","#EBEBEB")}) 
    })
    $(".time").fadeIn(400)
}).css("cursor","pointer")

 // function to make #contact fade in and logo & time fade out and another nav-link disabled
$("#contact").on("click", function(){
    $(".logo").fadeOut(400, function(){
        $(".contact").fadeIn(400,function(){
            $("#contact").siblings().addClass("disabled")
            $("#menu .nav-link, #about .nav-link").css("color","#000000")
        })
    })
    $(".time").fadeOut(400)
})

//function to close contact page and logo & time fade in 
$("#close3").on("click", function(){
    $(".contact").fadeOut(400, function(){
        $(".logo").fadeIn(400)
        $("#contact").siblings().removeClass("disabled")
        $("#menu .nav-link, #about .nav-link").css("color","#EBEBEB")
        $("#menu .nav-link").hover(function(){$("#menu .nav-link").css("color","#d11c1c")},function(){$("#menu .nav-link").css("color","#EBEBEB")})
        $("#about .nav-link").hover(function(){$("#about .nav-link").css("color","#d11c1c")},function(){$("#about .nav-link").css("color","#EBEBEB")}) 
    })
    $(".time").fadeIn(400)
}).css("cursor","pointer")


var typed = new Typed('.type', {
    strings: ['<i class="far fa-clock"></i> Saturday - Thursday 12:00 - 22:00 | Friday 13:30 - 00:00 ^2000','<i class="fas fa-map-marker-alt"></i> fifth settlement , New Cairo'], 
                                typeSpeed: 80,
                                backSpeed: 30,
                                loop: true,
    smartBackspace: true, // Default value 
    showCursor: false
  });
  
})