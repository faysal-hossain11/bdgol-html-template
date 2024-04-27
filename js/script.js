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
$(document).on("click", "#cust_btn", function () {

    $("#myModal").modal("toggle");

});

//choose-slider
$('.choose-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="pagination-btn pagination-left"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="pagination-btn pagination-right"><i class="fa-solid fa-angle-right"></i></button>',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//   recent-country-slider
$('.recent-country-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: 40,
    arrows: true,
    // prevArrow: '<button class="pagination-btn pagination-left"><i class="fa-solid fa-angle-left"></i></button>',
    // nextArrow: '<button class="pagination-btn pagination-right"><i class="fa-solid fa-angle-right"></i></button>',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//   featured-card-slider
$('.featured-card-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: 40,
    arrows: true,
    prevArrow: '<button class="pagination-btn pagination-left"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="pagination-btn pagination-right"><i class="fa-solid fa-angle-right"></i></button>',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//   news-section-slider
$('.news-section-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: 40,
    arrows: true,
    prevArrow: '<button class="pagination-btn pagination-left"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="pagination-btn pagination-right"><i class="fa-solid fa-angle-right"></i></button>',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});