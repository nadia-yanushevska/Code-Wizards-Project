import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

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
  return `<li class="faq-item" data-accordion-item>
    <div class="faq-question-wrapper" data-accordion-trigger>
      <h3 class="faq-question">${question}</h3>
      <button class="faq-arrow-btn" type="button">
        <svg  class="icon-arrow" width="20" height="20">
          <use href="./images/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>
    <p class="faq-answer" data-accordion-content>${answer}</p>
  </li>`;
}

function renderFAQ() {
  const faqList = document.querySelector('.faq-list');
  const faqMarkup = arrFaq.map(createMarkup).join('');

  faqList.innerHTML = faqMarkup;
}

renderFAQ();

const accordion = new Accordion('.faq-list');
