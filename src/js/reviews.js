import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

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
      <li class="swiper-slide">
        <div class="author">
          <img src="${review.avatar_url}" alt="Avatar" class="avatar" width="48" height="48">
          <h3 class="name">${review.author}</h3>
        </div>
        <p class="review-text">${review.review}</p>
      </li>
      
    `
      )
      .join('');
    listEl.innerHTML = reviewsList;
  } catch (error) {
    console.error(error);
  }
}
// renderReviews();
// new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//   },
// });

async function initSwiper() {
  await renderReviews();

  let swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    navigation: {
      prevEl: ' .mySwiper .swiper-button-prev',
      nextEl: '.mySwiper .swiper-button-next',
    },
    // breakpoints: {
    //   768: {
    //     slidesPerView: 2,
    //   },
    //   1440: {
    //     slidesPerView: 3,
    //   },
    // },

    // on: {
    //   slideChange: function () {
    //     if (swiper.isBeginning) {
    //       prevButton.classList.add('swiper-button-disabled');
    //     } else {
    //       prevButton.classList.remove('swiper-button-disabled');
    //     }
    //     if (swiper.isEnd) {
    //       nextButton.classList.add('swiper-button-disabled');
    //     } else {
    //       nextButton.classList.remove('swiper-button-disabled');
    //     }
    //   },
    // },
  });
}

initSwiper();
