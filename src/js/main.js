$(document).ready(function () {

    //burger-menu

    $('.header__burger').on('click', function () {
        $('.header__burger').toggleClass('header__burger_active');
        $('.main').toggleClass('main_active');
        $('.main__hidden-nav').toggleClass('main__hidden_active');
    });

    //carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        dotsContainer: '#owl-dots',
        autoplay:true,
        autoplayTimeout: 10000,
    });

// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

// Go to the previous item
    $('.owl-prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });
// Go to the previous item with dots
    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    //tabs

    $('ul.problem__caption').on('click', 'li:not(.problem__item_active)', function() {
        $(this)
            .addClass('problem__item_active').siblings().removeClass('problem__item_active')
            .closest('div.problem__tabs').find('div.problem__content').removeClass('problem__content_active').eq($(this).index()).addClass('problem__content_active');
    });

});

var map;

DG.then(function () {
    map = DG.map('map', {
        center: [51.180692, 71.426608],
        zoom: 16
    });
    var myIcon = DG.icon({
        iconUrl: './src/images/maps/icon.svg',
        iconSize: [38, 95],

    });

  var marker = DG.marker([51.180692, 71.426608], {icon: myIcon}).addTo(map).bindPopup('Центр Доктора Лабунца');
    marker.bindLabel('Это центр Доктора Лабунца', { static: false, className: 'dg-label', 	})
});


