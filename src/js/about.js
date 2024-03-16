import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const accordionData = [
  {
    title: 'About me',
    content: [
      'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.',

      'Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self',
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

const slidesData = [
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node.js',
  'React Native',
  'Soft skills',
];
function createAccordionItem({ title, content }) {
  const accordionItem = document.createElement('div');
  accordionItem.classList.add('group', 'tailwind-ac', 'border');

  const accordionTitle = createAccordionTitle(title);
  accordionItem.appendChild(accordionTitle);

  const accordionContent = createAccordionContent(content);
  accordionItem.appendChild(accordionContent);

  return accordionItem;
}

function createAccordionTitle(title) {
  const accordionTitle = document.createElement('h2');
  accordionTitle.classList.add('flex');

  const accordionButton = document.createElement('button');
  accordionButton.classList.add('tailwind-trigger', 'btn-name');
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
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none">
      <path stroke="#FAFAFA" stroke-width="2" d="M10.5 6.25 6 1.75l-4.5 4.5"/>
    </svg>
  `;
  return svgSpan;
}

function createAccordionContent(content) {
  const accordionContent = document.createElement('div');
  accordionContent.classList.add(
    'tailwind-panel',
    'overflow-hidden',
    'transition-accordion'
  );

  const contentList = document.createElement('ul');
  contentList.classList.add('p-2', 'text-section');
  content.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    contentList.appendChild(listItem);
  });

  accordionContent.appendChild(contentList);
  return accordionContent;
}

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

function switchSlide(direction) {
  const activeSlide = document.querySelector('.swiper-slide-transform.active');
  const slides = document.querySelectorAll('.swiper-slide-transform');
  let currentIndex = -1;
  for (let i = 0; i < slides.length; i++) {
    if (slides[i] === activeSlide) {
      currentIndex = i;
      break;
    }
  }

  let newIndex;
  if (direction === 'next') {
    newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  } else if (direction === 'prev') {
    newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  }

  activeSlide.classList.remove('active');
  slides[newIndex].classList.add('active');

  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');
  if (newIndex === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }
  if (newIndex === slides.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  slidesData.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('swiper-slide');

    const slideTransformElement = document.createElement('div');
    slideTransformElement.classList.add('swiper-slide-transform');

    if (index === 0) {
      slideTransformElement.classList.add('active');
    }

    slideTransformElement.textContent = slide;
    slideElement.appendChild(slideTransformElement);

    swiperWrapper.appendChild(slideElement);
  });

  const swiperContainer = document.querySelector('.swiper');
  const prevButton = document.createElement('button');
  const nextButton = document.createElement('button');

  prevButton.classList.add('swiper-button-prev');
  prevButton.style.display = 'none';
  nextButton.classList.add('swiper-button-next');

  swiperContainer.appendChild(prevButton);
  swiperContainer.appendChild(nextButton);

  prevButton.addEventListener('click', function () {
    switchSlide('prev');
  });

  nextButton.addEventListener('click', function () {
    switchSlide('next');
  });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: true,
    touch: true,
  });
});