$('.testimonials-wrap').slick({
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});



// start the modal js code
$(document).on("click","#cust_btn",function(){
  
    $("#myModal").modal("toggle");
    
  })