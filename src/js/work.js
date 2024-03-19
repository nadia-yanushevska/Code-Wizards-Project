import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const END_POINT = "/requests";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

const form = document.querySelector('.footer-work-form');
const modal = document.getElementById("modalContent");
const span = document.getElementsByClassName("close")[0];
const body = document.body;

form.addEventListener("submit", onFormSubmit)

async function addMessage(message) {
    return await axios.post(`${END_POINT}`, message);
}

async function onFormSubmit(e) {
    e.preventDefault()
    const email = e.currentTarget.elements.email.value.trim();
    const comment = e.currentTarget.elements.message.value.trim();
    if (!email || !comment) {
       showMessage(emptyMsg)
        return;
    }

    const userMsg = { email, comment }
    
    try {
        const res = await addMessage(userMsg)
        modal.style.display = "block";
        body.classList.add('modal-open');
        e.target.reset()
    } catch (error) {
     showMessage(wrongData)
    }
}

function showMessage(message) {
    const msgOptions = {
        message,
        messageColor: '#fff',
        backgroundColor: '#ED3B44',
        progressBarColor: '#B51B1B',
        position: 'topRight',
        class: 'message',
    };
    iziToast.show(msgOptions);
}

const wrongData = "Oops... Something went wrong, check your info and try again!";
const emptyMsg = "Error, the fields is empty!";

span.onclick = function() {
  modal.style.display = "none";
  body.classList.remove('modal-open');
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove('modal-open');
  }
}
