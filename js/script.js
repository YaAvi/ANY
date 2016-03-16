$(document).ready(function(){
    $('.main-pic').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        asNavFor: '.gallery'
    });
    $('.gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.main-pic',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div',
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.main-song').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        rtl: true,
        asNavFor: '.songs'
    });
    $('.songs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.main-song',
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        slide: 'div',
        rtl: true,
        responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});
