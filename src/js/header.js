const container = document.querySelector(`[js-elem = 'header-container']`);
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
  if (window.innerWidth < 768) {
    hideTabletItems();
    menuHeadElem.removeEventListener('click', showMenu);
    refs.openModalBtn.addEventListener('click', openModal);
  } else {
    showTabletItems();
    refs.openModalBtn.removeEventListener('click', openModal);
    menuHeadElem.addEventListener('click', showMenu);
  }
}

function showMenu() {
  refs.linkList.classList.toggle('is-hidden');
  refs.linkList.classList.contains('is-hidden')
    ? refs.linkList.removeEventListener('click', closeMenu)
    : refs.linkList.addEventListener('click', closeMenu);
}

function closeMenu() {
  refs.linkList.classList.add('is-hidden');
}

function openModal() {
  toggleHiddenClass(Object.values(refs));
  container.classList.toggle('modal-container');

  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.nav.addEventListener('click', closeModal);
}

function closeModal(e) {
  if (e.target === e.currentTarget || e.target.nodeName === 'UL') return;
  toggleHiddenClass(Object.values(refs));
  container.classList.toggle('modal-container');

  refs.closeModalBtn.removeEventListener('click', closeModal);
  refs.nav.removeEventListener('click', closeModal);
}

function toggleHiddenClass(arr) {
  arr.forEach(elem => {
    elem.classList.toggle('is-hidden');
  });
}

// Add to hero section with exported element
function toggleVisibility(section) {
  section.classList.toggle('invisible');
}

function showTabletItems() {
  refs.nav.classList.remove('is-hidden');
}

function hideTabletItems() {
  refs.nav.classList.add('is-hidden');
  refs.linkList.classList.add('is-hidden');
}
