/* -------------------------------------------

Name: 		Corey
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */

$(function () {

    "use strict";

    //preloader
    $(window).on('load', function () {
        $(".status").fadeOut();
        $(".preloader").delay(500).fadeOut("slow");
        /* Header animation */
        $(".navbar").waypoint(function () {
            var cssSelector = anime({
                targets: '.navbar .container',
                opacity: [0, 1],
                translateY: [-70, 0],
                easing: 'easeOutExpo',
                delay: 1000,
                delay: (el, i) => 100 * i,
                offset: '1000',
            });
            var cssSelector = anime({
                targets: 'header h1, header p, .hb, .hint',
                opacity: [0, 1],
                translateY: [30, 0],
                delay: (el, i) => 100 * i,
                easing: 'easeOutExpo',
                offset: '1000',
            });
            var cssSelector = anime({
                targets: '.swiper-next-3, .swiper-prev-3',
                opacity: [0, 1],
                translateY: [30, 0],
                delay: (el, i) => 100 * i,
                easing: 'easeOutExpo',
                offset: '1700',
            });
        }, {
            triggerOnce: true,
            offset: '60%'
        });
    })

    // Parallax
    $('.parallax-window').parallax({
        zIndex: -100,
    });

    // Scrollspy and smooth scroll
    $('body').scrollspy({
        target: ".navbar",
        offset: 71
    });

    $('.navbar-brand, .navbar a, .hint, .button').on("click", function () {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li a').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li a').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 1000);
        return false;
    });


    // About slider
    var swiper1 = new Swiper('.swiper-1', {
        autoplay: {
            delay: 6000,
        },
        loop: true,
        speed: 1100,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        slidesPerView: 1,
    });

    // Testimonials slider
    var swiper2 = new Swiper('.swiper-2', {
        autoplay: {
            delay: 6000,
        },
        loop: true,
        speed: 1100,
        navigation: {
            nextEl: '.swiper-next-2',
            prevEl: '.swiper-prev-2',
        },
        slidesPerView: 3,
        breakpoints: {
            992: {
                slidesPerView: 1
            },
        }


    });

    // Header slider
    var swiper3 = new Swiper('.swiper-3', {
        autoplay: {
            delay: 6000,
        },
        loop: true,
        speed: 1100,
        parallax: true,
        navigation: {
            nextEl: '.swiper-next-3',
            prevEl: '.swiper-prev-3',
        },
        slidesPerView: 1,
        onSlideChangeStart: function (swiper) {
            $("#home").waypoint(function () {
                var cssSelector = anime({
                    targets: 'header h1, header p, .hb, .hint',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    delay: (el, i) => 100 * i,
                    easing: 'easeOutExpo',
                    offset: '1200',
                });
            }, {
                triggerOnce: true,
                offset: '60%'
            });
        },
        onSlideChangeEnd: function (swiper) {
            $("#home").waypoint(function () {
                var cssSelector = anime({
                    targets: 'header h1, header p, .hb, .hint',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    delay: (el, i) => 100 * i,
                    easing: 'easeOutExpo',
                    offset: '1200',
                });
            }, {
                triggerOnce: true,
                offset: '60%'
            });
        }
    });

    // init Lightgallery
    lightGallery(document.getElementById('lightgallery'), {
        selector: '.gallery-item',
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        hideControlOnEnd: true,
        thumbnail: true,
        hideBarsDelay: 15000000,
    });

    // init Isotope
    var $grid = $('.masonry').isotope({
        itemSelector: '.port-item',
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });

    // bind sort button click
    $('#sorts').on('click', 'button', function () {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({
            sortBy: sortByValue
        });
    });

    // change is-checked class on buttons
    $('.filters').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    /* Skills animation */
    $(".skills").waypoint(function () {
        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 2000);
        });
    }, {
        triggerOnce: true,
        offset: '60%'
    });

    /* Servises  animation */
    $("#services").waypoint(function () {
        var cssSelector = anime({
            targets: '.service-icon, .services h3,  .descr',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: (el, i) => 100 * i,
            easing: 'easeOutExpo',
        });
    }, {
        triggerOnce: true,
        offset: '60%'
    });

    /* Stats  animation */
    $("#stats").waypoint(function () {
        var cssSelector = anime({
            targets: '.st .stats-icon, .st h3, .st p',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: (el, i) => 70 * i,
            easing: 'easeOutExpo',
        });
    }, {
        triggerOnce: true,
        offset: '70%'
    });

    /* Counterup init */
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    /* Testimonials animation */
    $("#testimonials").waypoint(function () {
        var cssSelector = anime({
            targets: '.swiper-prev-2, .swiper-next-2',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: (el, i) => 100 * i,
            easing: 'easeOutExpo',
        });
        var cssSelector = anime({
            targets: ' .review-text, .user-ava img',
            opacity: [0, 1],
            translateY: [50, 0],
            delay: (el, i) => 100 * i,
            easing: 'easeOutExpo',
        });
    }, {
        triggerOnce: true,
        offset: '60%'
    });

    //navbar color after scroll
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".navbar").addClass("bg-scroll");
        } else {
            $(".navbar").removeClass("bg-scroll");
        }
    });

    //Burger button
    $(".navbar-toggler").on('click', function () {
        $(".burger-menu").toggleClass("menu-on");
    });


})(jQuery);
