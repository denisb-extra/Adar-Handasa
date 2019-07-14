$(document).ready(function ($) {
    var colors = [
        "#E85136",
        "#FD9616",
        "#FECD22",
        "#FCE72B",
        "#CEE45B",
        "#83CD30",
        "#3FBFCF",
        "#009DDC"
    ];    
    var color = colors[Math.floor(Math.random()*colors.length)];
    $(".content .sep").css("background-color", color);
	window.addEventListener('scroll', onScroll);

    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
            
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
            //$(".logo-cont img").attr("src", "images/index/logo-dark.png");
        } else {
            $("header" ).removeClass("scrolled");
            //$(".logo-cont img").attr("src", "images/index/logo.png");
        }
    }
    onScroll();
    
	var menuVisible = false;
    $(".toggle-button" ).click(function(){
        
        if (!menuVisible) 
        {
            $(".mobile-menu-cont").slideToggle();
            $(".toggle-button" ).addClass("open");
            menuVisible = true;
        }
        else
        {
            $(".mobile-menu-cont").slideToggle();
            $(".toggle-button" ).removeClass("open");
            menuVisible = false;
        }
    });
    
    $(".mobile-menu-cont").hide();

    $('.mobile-menu ul.sub-menu').hide();

    $(".mobile-menu .sub-menu").each(function( index ) {
        var mainMenuItem = $(this).parent(".menu-item"); 
        var arrow = jQuery("<div class='open-arrow'><span>&#x25BC;</span></div>"); 
        $(mainMenuItem).append(arrow);   

       
        $(arrow).click(function(){
            $(mainMenuItem).find('ul.sub-menu').slideToggle();
            $(arrow).toggleClass("rotate");
        });
    });

    
    
});