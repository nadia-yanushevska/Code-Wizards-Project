const header = document.querySelector('[js-elem="header"]');
const container = header.querySelector(`[js-elem = 'header-container']`);
const menuHeadElem = document.querySelector('[js-elem="menu-btn"]');

const refs = {
  openModalBtn: container.querySelector(`[js-elem="open-btn"]`),
  closeModalBtn: container.querySelector(`[js-elem="close-btn"]`),
  logo: container.querySelector(`[js-elem="logo"]`),
  nav: container.querySelector(`[js-elem="nav"]`),
  linkList: container.querySelector(`[js-elem="modal-links"]`),
};

initialize();

addEventListener('resize', initialize);

function initialize() {
  initialCloseModal();
  if (window.innerWidth < 768) {
    hideTabletItems();
    refs.linkList.classList.add('underline');

    menuHeadElem.removeEventListener('click', showMenu);
    refs.openModalBtn.addEventListener('click', openModal);
  } else {
    showTabletItems();
    refs.linkList.classList.remove('underline');

    refs.openModalBtn.removeEventListener('click', openModal);
    menuHeadElem.addEventListener('click', showMenu);
  }
}

function openModal() {
  header.classList.add('animated-header');

  setTimeout(() => {
    hideElem(refs.openModalBtn);
    hideElem(refs.logo);

    showElem(refs.nav);
    showElem(refs.linkList);
    showElem(refs.closeModalBtn);

    document.body.classList.add('scroll-block');
    container.classList.add('modal-container');

    addHeaderBackground();
  }, 750);

  setTimeout(() => {
    header.classList.remove('animated-header');
  }, 1500);

  refs.closeModalBtn.addEventListener('click', onModalClose);
  refs.nav.addEventListener('click', onModalClose);
}

function onModalClose(e) {
  if (e.target === e.currentTarget || e.target.nodeName === 'UL') return;
  closeModal();
}

function closeModal() {
  header.classList.add('animated-header');

  setTimeout(() => {
    showElem(refs.openModalBtn);
    showElem(refs.logo);

    hideElem(refs.nav);
    hideElem(refs.linkList);
    hideElem(refs.closeModalBtn);

    document.body.classList.remove('scroll-block');
    container.classList.remove('modal-container');

    removeHeaderBackground();
  }, 700);

  setTimeout(() => {
    header.classList.remove('animated-header');
  }, 1500);

  refs.closeModalBtn.removeEventListener('click', onModalClose);
  refs.nav.removeEventListener('click', onModalClose);
}

function initialCloseModal() {
  showElem(refs.openModalBtn);
  showElem(refs.logo);

  hideElem(refs.nav);
  hideElem(refs.linkList);
  hideElem(refs.closeModalBtn);

  document.body.classList.remove('scroll-block');
  container.classList.remove('modal-container');

  removeHeaderBackground();

  refs.closeModalBtn.removeEventListener('click', onModalClose);
  refs.nav.removeEventListener('click', onModalClose);
}

function showMenu() {
  refs.linkList.classList.toggle('is-hidden');

  refs.linkList.classList.contains('is-hidden')
    ? refs.linkList.removeEventListener('click', closeMenu)
    : refs.linkList.addEventListener('click', closeMenu);
}

function closeMenu() {
  refs.linkList.classList.add('is-hidden');

  refs.linkList.removeEventListener('click', closeMenu);
}

function hideElem(elem) {
  elem.classList.add('is-hidden');
}

function showElem(elem) {
  elem.classList.remove('is-hidden');
}

function showTabletItems() {
  showElem(refs.nav);
}

function hideTabletItems() {
  hideElem(refs.nav);
  hideElem(refs.linkList);
}

function addHeaderBackground() {
  header.classList.add('header-background');
}

function removeHeaderBackground() {
  header.classList.remove('header-background');
}
