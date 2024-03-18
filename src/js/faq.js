const arrFaq = [
  {
    question: 'What programming languages are most often used in your project?',
    answer:
      'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    question: 'What are the deadlines for the&nbsp;project?',
    answer:
      'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    question: 'What payment methods do you&nbsp;accept?',
    answer:
      'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
  {
    question: 'How can I contact you?',
    answer:
      'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    question: 'Do you provide advice or&nbsp;support?',
    answer:
      'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    question:
      'What does the process of developing a software product look like from idea to implementation?',
    answer:
      'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
];

function createMarkup({ question, answer }) {
  return `<li class="faq-item">
    <div class="faq-container">
      <h3 class="question-title">${question}</h3>
      <button class="faq-btn" type="button" aria-label="Open item">
        <svg class="icon-arrow-down" width="20" height="20">
          <use href="./img/sprite.svg#icon-arrow-down"></use>
        </svg>
        <svg class="icon-arrow-up" width="20" height="20">
          <use href="./img/sprite.svg#icon-arrow-up"></use>
        </svg>
      </button>
    </div>
    <div class="answer-wrapper">
      <p class="answer-text">${answer}</p>
    </div>
  </li>`;
}

function renderFAQ() {
  const faqList = document.querySelector('.faq-list');

  const halfIndex = Math.ceil(arrFaq.length / 2);

  const firstHalf = arrFaq.slice(0, halfIndex);
  const secondHalf = arrFaq.slice(halfIndex);

  let arrToRender = arrFaq;

  if (window.matchMedia('(min-width: 1280px)').matches) {
    const arrNew = [];

    firstHalf.forEach((elem, index, arr) => {
      arrNew.push(arr[index]);
      if (index < secondHalf.length) {
        arrNew.push(secondHalf[index]);
      }
    });

    arrToRender = arrNew;
  }

  const faqMarkup = arrToRender.map(createMarkup).join('');

  faqList.innerHTML = faqMarkup;
}

renderFAQ();

const faqBtns = document.querySelectorAll('.faq-btn');
const answerWrappers = document.querySelectorAll('.answer-wrapper');

const initialHeights = [];
answerWrappers.forEach((wrapper, index) => {
  initialHeights[index] = wrapper.scrollHeight;
  wrapper.style.height = '0';
});

faqBtns.forEach((trigger, index) => {
  trigger.addEventListener('click', event => {
    const iconArrowDown = event.currentTarget.querySelector('.icon-arrow-down');
    const iconArrowUp = event.currentTarget.querySelector('.icon-arrow-up');
    const answerWrapper = event.currentTarget
      .closest('.faq-item')
      .querySelector('.answer-wrapper');

    answerWrapper.classList.toggle('is-active');

    if (answerWrapper.classList.contains('is-active')) {
      answerWrapper.style.height = `${initialHeights[index]}px`;
      iconArrowDown.style.display = 'none';
      iconArrowUp.style.display = 'block';
    } else {
      answerWrapper.style.height = '0';
      iconArrowDown.style.display = 'block';
      iconArrowUp.style.display = 'none';
    }
  });
});
