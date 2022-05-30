//Swiper Sale
var swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


//Swiper Types

var swiper = new Swiper(".mySwiper3", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  roundLengths : true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});


//Swiper swiperChandelier
var swiper = new Swiper('.tabs__item', {
  slidesPerView: 1,
  roundLengths : true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});