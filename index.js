
$(document).ready(function()
{

$("#banner-area .owl-carousel").owlCarousel({
    dots:true,
    items:1,
});

$("#top-sale .owl-carousel").owlCarousel({
    dots:false,
    loop:true,
    nav:true,
    responsive:{
        0:{item:1},
        600:{items:3},
        1000:{items:5}
    },
    items:1,
});

});


