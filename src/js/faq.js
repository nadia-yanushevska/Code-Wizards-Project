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
  const faqListFirst = document.querySelector('.faq-list-first');
  const faqListSecond = document.querySelector('.faq-list-second');

  const firstHalf = arrFaq.slice(0, 3);
  const secondHalf = arrFaq.slice(3);

  const faqMarkupFirst = firstHalf.map(createMarkup).join('');
  const faqMarkupSecond = secondHalf.map(createMarkup).join('');

  faqListFirst.innerHTML = faqMarkupFirst;
  faqListSecond.innerHTML = faqMarkupSecond;
}

renderFAQ();

const faqBtn = document.querySelectorAll('.faq-btn');

faqBtn.forEach(trigger => {
  trigger.addEventListener('click', event => {
    const iconArrowDown = event.currentTarget.querySelector('.icon-arrow-down');
    const iconArrowUp = event.currentTarget.querySelector('.icon-arrow-up');
    const answerWrapper = event.currentTarget
      .closest('.faq-item')
      .querySelector('.answer-wrapper');

    if (answerWrapper.classList.contains('is-active')) {
      iconArrowDown.style.display = 'block';
      iconArrowUp.style.display = 'none';
    } else {
      iconArrowDown.style.display = 'none';
      iconArrowUp.style.display = 'block';
    }
    answerWrapper.classList.toggle('is-active');
  });
});
