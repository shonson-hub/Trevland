// $(document).ready(function(){
//     $('.special__list').slick({
//         // arrows:false, если стрелки не нужны
//         centerMode: true,
//         centerPadding: '50px',
//         arrows:false,
//         dots:true,
//         slidesToShow:3,
//         slideToScrole:1,
//         speed:1000,
//         infinite:false,
//         initialSlide:3,
//         // autoplay:true,
//         autoplaySpeed:1500,
//         responsive: [
//             {
//                 breackpoint: 550,
//                 settings: {
//                     slidesToShow: 1
//                 }

//             }

//         ]
//     });
//   });   

const booking = document.querySelector(".menu__booking");
const popup = document.querySelector(".modal-booking");
const close = document.querySelector(".modal-booking__close");
const popupSubmit = document.querySelector(".modal-submit");
const message = document.querySelector(".modal-submit__message");
const form = document.querySelector(".subscribe__form");
const email = document.querySelector(".subscribe__input");
const page = document.querySelector(".page");
const toggleTheme = document.querySelector(".menu__theme");
const header = document.querySelector(".header");
// const carouselButton = document.querySelector(".carousel__button");
// const carouselButtonOne = document.querySelector(".carousel__button-one");
// const carouselButtonTwo = document.querySelector(".carousel__button-two");
// const carouselButtonThree = document.querySelector(".carousel__button-three");
// const activeSlide = document.querySelector(".active");
// const carouselButtons = document.querySelector(".carousel__buttons");

//Попапы

booking.onclick = function() {
    popup.classList.add("modal-show");
}

close.onclick = function() {
    popup.classList.remove("modal-show");
}

form.onsubmit = function(evt) {
    evt.preventDefault();
    popupSubmit.classList.add("submit");
    message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
}

window.onclick = function(event) {
    if (event.target === message) {
        popupSubmit.classList.remove("submit");
    }
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        popupSubmit.classList.remove("submit");
        popup.classList.remove("modal-show");
    }
})

//Переключатель темы

toggleTheme.onclick = function() {
    page.classList.toggle("dark-theme");
}