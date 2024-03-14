// import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const END_POINT = "/requests";
const BASE_URL = 'https://portfolio-js.b.goit.study/api'

// axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

const form = document.querySelector('.footer-work-form');

form.addEventListener("submit", onFormSubmit)

// async function addMessage(message) {
//     return await axios.post(`${END_POINT}`, message);
// }
function addMessage(message) {
  return fetch(`${BASE_URL}${END_POINT}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(message),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

async function onFormSubmit(e) {
    e.preventDefault()
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    if (!email || !message) {
       showMessage(emptyMsg)
        return;
    }
    const userMsg = { email, message }

    addMessage(userMsg)
    .then((res) => {
        console.log(res);
        e.target.reset()
        
    })
        .catch((err) => {
            console.log(err)
            showMessage(wrongData)

        })


    // try {
    //     await addMessage(userMsg)
    //     e.target.reset()
    // } catch (error) {
    //     console.log(error);
    //  showMessage(wrongData)
    // }
    
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


