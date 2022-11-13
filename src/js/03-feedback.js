import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector("[name='email']");
const message = document.querySelector("[name='message']");
const btn = document.querySelector("[type='submit']");

class User {
  constructor(email, message) {
    this.email = email;
    this.message = message;
  }
}

const preloadValue = () => {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data === null) return;
  email.value = data.email;
  message.value = data.message;
};

const handleInput = () => {
  const user = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(user));
};

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' || message.value === '') {
    alert('Just do not leave empty fields');
    return;
  }
  console.log(new User(email.value, message.value));
  form.reset();
  localStorage.removeItem('feedback-form-state');
};

window.addEventListener('load', preloadValue);
form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);
