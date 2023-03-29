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

  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function localStorageText() {
  const json = localStorage.getItem(FEEDBACK_FORM_KEY);
  const savedStorage = JSON.parse(json);

  if (savedStorage) {
    feedbackForm.elements.email.value = savedStorage.email;
    feedbackForm.elements.message.value = savedStorage.message;
  }
}
