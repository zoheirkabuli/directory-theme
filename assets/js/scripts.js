// feather icon
feather.replace();

// carousel
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    
    // when window width is >= 640px
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
