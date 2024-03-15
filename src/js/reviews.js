import Axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const listEl = document.querySelector('.reviews-list');
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

const axios = Axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api/reviews',
});

async function getReviewsData() {
  try {
    const res = await axios.get();
    return res.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

async function renderReviewsCard() {
  try {
    const reviewsData = await getReviewsData();
    if (reviewsData.length === 0) {
      listEl.innerHTML = '<li>Not Found</li>';
      return;
    }
    let markup = '';
    reviewsData.forEach(data => {
      markup += `<li><div class="swiper-slide">
          <div class="author">
            <img src="${data.avatar_url}" alt="Avatar" class="avatar" width="48" height="48">
            <h3 class="name">${data.author}</h3>
          </div>
          <p class="review-text">${data.review}</p>
        </div></li>`;
    });
    listEl.innerHTML = markup;
  } catch (error) {
    console.error('Error rendering reviews:', error);
  }
}

async function initSwiper() {
  await renderReviewsCard();
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 3,
      },
    },
    navigation: {
      prevEl: prevButton,
      nextEl: nextButton,
    },
    on: {
      slideChange: function () {
        if (swiper.isBeginning) {
          prevButton.classList.add('swiper-button-disabled');
        } else {
          prevButton.classList.remove('swiper-button-disabled');
        }
        if (swiper.isEnd) {
          nextButton.classList.add('swiper-button-disabled');
        } else {
          nextButton.classList.remove('swiper-button-disabled');
        }
      },
    },
  });
}

initSwiper();
