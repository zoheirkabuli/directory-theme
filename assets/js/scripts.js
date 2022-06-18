// feather icon
feather.replace();

// carousel
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
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

// mobile menu

const collapsible = document.querySelectorAll(".collapsible");
collapsible.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("collapsible--extended");
  });
});
