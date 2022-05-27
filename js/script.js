

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
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu__list");

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

// Burger



burger.addEventListener("click", () => {
    burger.classList.toggle("activebrgr")
    burgerMenu.classList.toggle("show-burger")
    

});

//Переключатель темы

toggleTheme.onclick = function() {
    page.classList.toggle("dark-theme");
    
}

const goToTop = () => {
    window.scrollTo(0, 0)
}

goToTop()

new Swiper ('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    initialSlide: 1,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 3,
        },
    },
})
