import Axios from 'axios';
import Swiper from 'swiper';

import 'swiper/css';
const container = document.querySelector('.container');
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
    markup += `<div class="author-review">
    <div class="author">
        <img src=${data.avatar_url} alt="Avatar" class="avatar">
        <h3 class="name">${data.author}</h3>
    </div>
    <p class="review-text">
        ${data.review}
    </p>
</div>`;
  });
  container.insertAdjacentHTML('beforeend', markup);
}
renderReviewsCard();

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
