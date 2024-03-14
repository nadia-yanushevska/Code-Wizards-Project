import Axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';

// import { Navigation, Pagination } from 'swiper/modules';

const swiperContainer = document.querySelector('.mySwiper');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const axios = Axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api/reviews',
});

async function getReviewsData() {
  try {
    const res = await axios.get();
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function renderReviewsCard() {
  const reviewsData = await getReviewsData();
  let markup = '';
  reviewsData.forEach(data => {
    markup += `<div class="swiper-slide">
    <div class="author">
        <img src=${data.avatar_url} alt="Avatar" class="avatar">
        <h3 class="name">${data.author}</h3>
    </div>
    <p class="review-text">
        ${data.review}
    </p>
</div>`;
  });
  swiperWrapper.insertAdjacentHTML('beforeend', markup);
}
renderReviewsCard();

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 3,
    },
  },
  //   Navigation: {
  //     nextEL: 'swiper-button-next',
  //     preEl: 'swiper-button-prev',
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
});
