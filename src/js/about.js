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



document.addEventListener('DOMContentLoaded', function () {
  const accordionContainer = document.querySelector('.accordion');
  let activeIndex = 0;

  accordionData.forEach(({ title, content }, index) => {
    const accordionBtn = createBtn(title);
    const accordionContent = createContent(content);

    accordionBtn.addEventListener('click', () => {
      accordionContent.classList.toggle('active');
      const activeContent = accordionContainer.querySelector(
        '.accordion-content.active'
      );
      if (activeContent && activeContent !== accordionContent) {
        activeContent.classList.remove('active');
      }
    });

    addItemToContainer(accordionContainer, accordionBtn, accordionContent);

    if (index === activeIndex) {
      accordionContent.classList.add('active');
    }
  });

  const myAccordion = new Accordion('.accordion', {
    duration: 400,
    closeOthers: true,
  });
});

function createBtn(title) {
  const accordionBtn = document.createElement('button');
  accordionBtn.classList.add('accordion-title');

  const titleSpan = document.createElement('span');
  titleSpan.textContent = title;
  accordionBtn.appendChild(titleSpan);

  const svgSpan = document.createElement('span');
  svgSpan.classList.add('arrow-up');
  svgSpan.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" fill="none"><path stroke="#FAFAFA" stroke-width="2" d="M10.5 6.25 6 1.75l-4.5 4.5"/></svg>
  `;

  accordionBtn.appendChild(svgSpan);
  svgSpan.addEventListener('click', () => {
    svgSpan.style.transform = 'rotate(180deg)';
  });
  return accordionBtn;
}

function createContent(content) {
  const accordionContent = document.createElement('div');
  accordionContent.classList.add('accordion-content');

  const contentList = document.createElement('ul');
  content.forEach(contentItem => {
    const li = document.createElement('li');
    li.textContent = contentItem;
    contentList.appendChild(li);
  });

  accordionContent.appendChild(contentList);
  return accordionContent;
}

function addItemToContainer(container, btn, content) {
  container.appendChild(btn);
  container.appendChild(content);
}

document.addEventListener('DOMContentLoaded', function () {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  slidesData.forEach(slide => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('swiper-slide');
    slideElement.textContent = slide;
    swiperWrapper.appendChild(slideElement);
  });

  const swiperContainer = document.querySelector('.swiper');
  const prevButton = document.createElement('button');
  const nextButton = document.createElement('button');

  prevButton.classList.add('swiper-button-prev');
  nextButton.classList.add('swiper-button-next');

  swiperContainer.appendChild(prevButton);
  swiperContainer.appendChild(nextButton);

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

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
