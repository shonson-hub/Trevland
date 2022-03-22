let myImageSlider = new Swiper('.special__main-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',

        clickable: true,

        dynamicalBullets: true,

        renderBullets: function (indexedDB, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    slidesPerView: 3,
});