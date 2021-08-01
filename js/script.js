$(function () {
    // Sticky header
    if ($(window).width() >= 1200) {
        $offset = $(".primary-header").height();
        if ($(window).scrollTop() > $offset)
            $(".primary-header").addClass("sticky");

        $(window).scroll(function () {
            if ($(this).scrollTop() > $offset)
                $(".primary-header").addClass("sticky");
            else
                $(".primary-header").removeClass("sticky");
        });
    } else {
        $(".primary-header").addClass("sticky");
    }


    // Mobile Menu
    $(".primary-header .menu-toggle").click(function () {
        $(this).find(".menu-bars").toggleClass("active");
        $(".mobile-menu").slideToggle(250);
    });

    // Stats Counter JS
    $('.stat-box .counter').counterUp({
        delay: 20,
        time: 1500
    });

    // Fancy box - gallery
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
    });

    // Product Inner Swiper
    var productThumbSwiper = new Swiper(".productThumbSwiper", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var productSwiper = new Swiper(".productSwiper", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: productThumbSwiper,
        },
    });

    // Responsive 
    if ($(window).width() <= 1200) {
        $('.gx-5').removeClass('gx-5');
        $('.container-md').removeClass('container-md');
    }
})