import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const accordionData = [
  {
    title: 'About me',
    content: [
      'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.',

      'Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.',
    ],
  },
  {
    title: 'Role',
    content: [
      'Frontend development',
      'HeadlessCMS, Wordpress',
      'Blender (enjoy)',
    ],
  },
  {
    title: 'Education',
    content: [
      '2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York',
      '2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York',
      '2020 - 2022 / Advanced Blender Animation Techniques, Udemy',
    ],
  },
];

function createAccordionItem({ title, content }) {
  const accordionItem = document.createElement('div');
  accordionItem.classList.add('tailwind-ac');

  const accordionTitle = createAccordionTitle(title);
  accordionItem.appendChild(accordionTitle);

  const accordionContent = createAccordionContent(content);
  accordionItem.appendChild(accordionContent);

  return accordionItem;
}

function createAccordionTitle(title) {
  const accordionTitle = document.createElement('h3');
  accordionTitle.classList.add('flex');

  const accordionButton = document.createElement('button');
  accordionButton.classList.add('tailwind-trigger');
  accordionButton.textContent = title;

  const svgSpan = createSvgSpan();
  accordionButton.appendChild(svgSpan);

  accordionTitle.appendChild(accordionButton);
  return accordionTitle;
}

function createSvgSpan() {
  const svgSpan = document.createElement('span');
  svgSpan.classList.add('btn');
  svgSpan.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#FAFAFA" stroke-width="2" d="m15 7.5-5 5-5-5"/></svg>
  `;
  return svgSpan;
}

function createAccordionContent(content) {
  const accordionContent = document.createElement('div');
  accordionContent.classList.add('tailwind-panel');

  const contentList = document.createElement('ul');
  contentList.classList.add('p-2');
  content.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('accordion-item');
    listItem.textContent = item;
    contentList.appendChild(listItem);
  });

  accordionContent.appendChild(contentList);
  return accordionContent;
}

function initializeAccordions() {
  const accordionContainer = document.querySelector(
    '.tailwind-accordion-container'
  );
  accordionData.forEach(item => {
    const accordionItem = createAccordionItem(item);
    accordionContainer.appendChild(accordionItem);
  });

  document.addEventListener('click', function (event) {
    if (event.target.closest('.tailwind-trigger')) {
      const accordionButton = event.target.closest('.tailwind-trigger');
      const svgSpan = accordionButton.querySelector('.btn');
      svgSpan.classList.toggle('rotate');
    }
  });

  const firstSvgSpan = accordionContainer.querySelector('.btn');
  firstSvgSpan.classList.add('rotate');

  new Accordion('.tailwind-accordion-container', {
    elementClass: 'tailwind-ac',
    triggerClass: 'tailwind-trigger',
    panelClass: 'tailwind-panel',
    openOnInit: [0],
  });
}

//-------------Swiper--------------------

function aboutRender(skills, query) {
  const skillsMarkup = skills
    .map(el => {
      return `<li class="swiper-slide about-item"><p class="about-item-par">${el}</p></li>`;
    })
    .join('');

  query.insertAdjacentHTML('beforeend', skillsMarkup);
}

function initializeSwiper() {
  const aboutSwiperWrapper = document.querySelector('.about-swiper-wrapper');
  const aboutSwiper = document.createElement('div');
  aboutSwiper.classList.add('swiper', 'about-jefferson-swiper');
  const swiperWrapper = document.createElement('ul');
  swiperWrapper.classList.add('about-swiper-list', 'swiper-wrapper');

  const slidesData = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Node.js',
    'React Native',
    'Soft skills',
    'Angular',
  ];

  aboutRender(slidesData, swiperWrapper);

  const nextBtn = document.createElement('div');
  nextBtn.classList.add('next-button');
  nextBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
      <path stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.667 20h26.666M23.334 10l10 10-10 10"/>
    </svg>
  `;

  aboutSwiper.appendChild(swiperWrapper);
  aboutSwiper.appendChild(nextBtn);
  aboutSwiperWrapper.appendChild(aboutSwiper);

  const aboutSwiperInstance = new Swiper('.about-jefferson-swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    speed: 400,
    slidesPerView: 'auto',
    loop: true,
    loopAddBlankSlides: true,
    navigation: {
      nextEl: 'next-button',
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: true,
    touch: true,
  });

  nextBtn.addEventListener('click', () => {
    aboutSwiperInstance.slideNext();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initializeAccordions();
  initializeSwiper();
});
