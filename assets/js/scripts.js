// feather icon
feather.replace();

// carousel
const homeSwiper = new Swiper(".carousel-product", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 768px
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
const toggleBtn = document.querySelector(".nav__toggler");
const collapsible = document.querySelectorAll(".collapsible");
toggleBtn.addEventListener("click", () => {
  collapsible.forEach((item) => {
    item.classList.toggle("collapsible--extended");
  });
});

// product gallery

const productSwiper = new Swiper(".product__image-gallery", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Tabs
document.getElementsByClassName("tablinks")[0].className += " active";
document.getElementById("product-details").style.display = "block";

function openCity(evt, cityName) {
  let i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
