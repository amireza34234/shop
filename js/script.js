$(document).ready(function(){
	
	$('.cart').click(function(){
		$('.cart-content').fadeToggle();
	});
	
	$('.counter').startTimer();
	
$('.ov-0').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
	
$('.ov1').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('.ov2').owlCarousel({
    rtl:true,
    loop:false,
    margin:10,
    nav:true,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
	
$('.ov3').owlCarousel({
    rtl:true,
    loop:false,
    margin:10,
    nav:true,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


$('.ov-single').owlCarousel({
    rtl:true,
    loop:false,
    margin:10,
    nav:true,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

$('.ov-single-two').owlCarousel({
    rtl:true,
    loop:false,
    margin:10,
    nav:true,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

$(".s-img").elevateZoom();




	});
	$(document).ready(function(){
        $('#green').click(function() {
          $('.content').hide();
          $('#greenContent').show();
        });
    
        $('#blue').click(function() {
          $('.content').hide();
          $('#blueContent').show();
        });
    
        $('#yellow').click(function() {
          $('#blueContent').hide();
          $('#yellowContent').show();
        });
        $( ".inner-switch" ).on("click", function() {
          if( $( "body" ).hasClass( "dark" )) {
            $( "body" ).removeClass( "dark" );
            $( ".inner-switch" ).text( "OFF" );
          } else {
            $( "body" ).addClass( "dark" );
            $( ".inner-switch" ).text( "ON" );
          }
      });
      });