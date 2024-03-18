// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".projects .swiper", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      disabledClass: "disabled",
      },
    modules: [Navigation, Pagination],
  });
});
