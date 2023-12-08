var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loopedSlides: 5, //looped slides should be the same
    thumbs: {
        swiper: galleryThumbs,
    },
});