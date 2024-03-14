import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const END_POINT = "/requests";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

const form = document.querySelector('.footer-work-form');

form.addEventListener("submit", onFormSubmit)

async function addMessage(message) {
    return await axios.post(`${BASE_URL}${END_POINT}`, message);
}

async function onFormSubmit(e) {
    e.preventDefault()
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();
    if (!email || !message) {
       showMessage(emptyMsg)
        return;
    }
    const userMsg = { email, message }
    try {
        await addMessage(userMsg)
        e.target.reset()
    } catch (error) {
        console.log(error);
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

