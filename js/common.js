$(document).ready(function() {

    function animation_block(item, animate_type, dl) {

        setTimeout(function () {
            $(item).addClass("animated " + animate_type); 
            $(item).css("opacity", "1");
        }, dl);
        setTimeout(function () {
            $(item).removeClass("animated " + animate_type);
        }, 2000);
    }

    function height_detect() {
        $(".main_head").css("height", $(window).height());
        $(".main_head").parallax({imageSrc: "img/bg.jpg"});
    }

    height_detect();
    
    $(window).resize(function() {
        height_detect();
    });

	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 

    animation_block($("#hhh1"),"bounceInLeft", 0);
    animation_block($("#ppp1"),"bounceInRight", 500);

    $(".line-wrapp").click(function() {
	    $(this).toggleClass("active");
 
        $("a[href*='#']").css("opacity", "0");
        if($(this).hasClass("active")) {
            $(".top_mnu").fadeIn(600);
            $(".wrap_label").addClass("label_opacity");
            animation_block($("a[href*='about']"), "bounceInUp", 100);
            animation_block($("a[href*='summary']"), "bounceInUp", 250);
            animation_block($("a[href*='bestsellers']"), "bounceInUp", 250);
            animation_block($("a[href*='advantages']"), "bounceInUp", 400);
            animation_block($("a[href*='contacts']"), "bounceInUp", 550);
        } else {
            $(".top_mnu").fadeOut(600);
            $(".wrap_label").removeClass("label_opacity");
        }
    });

    $(".top_mnu ul li a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".line-wrapp").toggleClass("active");
        $(".wrap_label").removeClass("label_opacity");
    });
    
    $("a[href*='#']:not([href='#'])").click(function() {
        if( location.pathname.replace( /^\// , '' ) == this.pathname.replace( /^\// , '' ) && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $( '[name='+this.hash.slice(1)+']' );
            if(target.length) {
                $('html,body').stop().animate( {
                    scrollTop:target.offset().top
                } , 1000 );
                return false;
            }
        }
    });

});

