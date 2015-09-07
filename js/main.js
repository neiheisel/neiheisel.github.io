$(document).ready(function() {

    /* Scroll hire me button to contact page */
    $('.contact-me').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    /* For Bootstrap current state on portfolio sorting */
    $('ul.nav-pills li a').click(function(e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })

    /* portfolio mixitup */
    $(window).load(function() {
        var $container = $('.grid-wrapper');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.grid-controls li a').click(function() {
            $('.grid-controls .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });

    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });

    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: ":not(.external)",
        easing: "swing"
    });

    /* VEGAS Home Slider */
    $('#page-welcome').vegas({
      slides: [
          { src: '/img/slider/1.jpg' },
          { src: '/img/slider/2.jpg' },
          { src: '/img/slider/3.jpg' },
          { src: '/img/slider/4.jpg' },
          { src: '/img/slider/5.jpg' },
          { src: '/img/slider/6.jpg' },
          { src: '/img/slider/7.jpg' },
          { src: '/img/slider/8.jpg' }
      ],
      overlay: true
    });

    $("#vegas-next").click(function() {
        $('#page-welcome').vegas('next');
    });
    $("#vegas-prev").click(function() {
       $('#page-welcome').vegas('previous');
    });

});
