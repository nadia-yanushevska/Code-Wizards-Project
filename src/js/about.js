import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

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

    // Розкриваємо перший елемент за замовчуванням
    if (index === activeIndex) {
      accordionContent.classList.add('active');
    }
  });

  // Виклик Accordion для створення акордеону
  const myAccordion = new Accordion('.accordion', {
    duration: 400,
    closeOthers: true,
  });
});

function createBtn(title) {
  const accordionBtn = document.createElement('button');
  accordionBtn.classList.add('accordion-btn');
  accordionBtn.textContent = title;
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
