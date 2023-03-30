import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_FORM_KEY = 'feedback-form-state';
const formData = {};

feedbackForm.addEventListener('input', throttle(onFormText, 500));
feedbackForm.addEventListener('submit', onSubmitButton);

localStorageText();

function onFormText(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
}

function onSubmitButton(event) {
  event.preventDefault();

  if (event.target.email.value === '' || event.target.message.value === '') {
    return alertError();
  }

  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

const alertError = () => {
  alert('Все поля должны быть заполнены');
};

function localStorageText() {
  const json = localStorage.getItem(FEEDBACK_FORM_KEY);
  const savedStorage = JSON.parse(json);

  if (
    savedStorage &&
    feedbackForm.elements.email &&
    feedbackForm.elements.message
  ) {
    feedbackForm.elements.email.value = savedStorage.email;
    feedbackForm.elements.message.value = savedStorage.message;
  }
}
