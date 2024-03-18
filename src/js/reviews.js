import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
        <div class="review-text">${review.review}</div>
        </div>
      </div>
      </li>
    `
      )
      .join('');
    listEl.innerHTML = reviewsList;
  } catch (error) {
    console.error(error);
  }
}

// async function initSwiper() {
//   await renderReviews();

//   let swiper = new Swiper('.mySwiper', {
//     slidesPerView: 1,
//     modules: [Navigation],
//     navigation: {
//       prevEl: ' .mySwiper .swiper-button-prev',
//       nextEl: '.mySwiper .swiper-button-next',
//     },
//     breakpoints: {
//       768: {
//         slidesPerView: 2,
//       },
//       1440: {
//         slidesPerView: 4,
//       },
//     },
//     mousewheel: {
//       loop: false,
//     },

//     keyboard: {
//       enabled: true,
//       onlyInViewport: false,
//     },
//     loop: false,
//   });
// }

async function initSwiper() {
  await renderReviews();
  let btnPrev = document.querySelector(
    '.reviews .mySwiper .swiper-button-prev'
  );
  let btnNext = document.querySelector(
    '.reviews .mySwiper .swiper-button-next'
  );

  const swiper = new Swiper('.reviews .mySwiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    spaceBetween: 16,
    pageUpDown: true,
    mousewheel: true,
    navigation: {
      prevEl: btnPrev ? btnPrev : undefined,
      nextEl: btnNext ? btnNext : undefined,
    },
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}

initSwiper();
