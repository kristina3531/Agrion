$(document).ready(function () {
    svg4everybody({});

    //Show dropdown-menu
    $('.toggle-menu').on('click', function() {
        $('.toggle-dropdown').toggleClass('active');
    });

    //Add class active in header link
    $('.nav-list__link').on('click', function() {
        $('.nav-list__link.active').removeClass('active');
        $(this).addClass('active');
    });

    //Search mobile
    $('.search-mobile__btn').on('click', function() {
        $(this).addClass('active');
        $('.search-mobile').toggleClass('show-text');
    })

    $('.search-mobile__text').focusin(function() {
        $(this).addClass('active');
        $('.search-mobile__btn').addClass('move').focus();
      });
      
      $('.search-mobile__text').focusout(function() {
        $(this).removeClass('active').val("");
        $('.search-mobile__btn').removeClass('move');
      });

    //Slider for sertificates
    $('.sertificates-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        centerMode: true,
        prevArrow: '.sertificates-btn--prev',
        nextArrow: '.sertificates-btn--next'
    });

});