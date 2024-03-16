import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

const listEl = document.querySelector('.reviews-list');

async function getReviewsData() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function renderReviews() {
  try {
    const reviewsData = await getReviewsData();
    if (!reviewsData) {
      listEl.innerHTML = '<li>Not Found</li>';
      return;
    }
    const reviewsList = reviewsData
      .map(
        review => `
        
      <li class="reviews-slide swiper-slide">
        <div class="author">
          <img src="${review.avatar_url}" alt="Avatar" class="avatar" width="48" height="48">
          <div class = "reviews-data">
          <h3 class="name">${review.author}</h3>
        <p class="review-text">${review.review}</p></div></div>
      </li>
    `
      )
      .join('');
    listEl.innerHTML = reviewsList;
  } catch (error) {
    console.error(error);
  }
}

async function initSwiper() {
  await renderReviews();

  let swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    modules: [Navigation],
    navigation: {
      prevEl: ' .mySwiper .swiper-button-prev',
      nextEl: '.mySwiper .swiper-button-next',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    mousewheel: {
      loop: false,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    loop: false,
  });
}

initSwiper();
