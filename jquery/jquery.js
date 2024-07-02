// owl carousel responsive
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
    
        nav:false,
        autoplay:false,
        responsive:{
        0:{
        items:1
        },
        600:{
        items:1
        
        },
        1000:{
        items:2
        }
        }
        })
        }
        );
        // nav bar responsive
        $(document).ready(function(){
            $("#show").click(function(){
                $(".list").fadeToggle("slow");
            })
        })