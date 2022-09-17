import {
  setAttribute
} from './create-data/create-card.js';

const form = document.querySelector('.ad-form');
const resetButton = form.querySelector('.ad-form__reset');

const getTemplateElement = (selector) => {
  const templateElement = document.querySelector(selector);
  if (templateElement && templateElement.content.children) {
    return templateElement.content.children[0];
  }
};

const showAlert = (message,color) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = color;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

};

const prepareSuccessMessage = () => {
  const success = getTemplateElement('#success');
  const successNode = success.cloneNode(true);
  const setNodeAttribute = setAttribute(successNode);
  setNodeAttribute('success__message', 'Отправка была проведена успешно');
  return successNode;
};

const getSuccessMessage = () => {
  const successMessage = prepareSuccessMessage();
  document.body.append(successMessage);
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if(event.key === 'Escape'){
      successMessage.remove();
    }
  });
  document.addEventListener('click', () => {
    successMessage.remove();
  });
  form.reset();
  document.removeEventListener('keydown', () => {});
};

const prepareErrorMessage = () => {
  const error = getTemplateElement('#error');
  const errorNode = error.cloneNode(true);
  const setNodeAttribute = setAttribute(errorNode);
  setNodeAttribute('error_message', 'Возникла ошибка при отправке');
  return errorNode;
};

const getErrorMessage = () => {
  const errorMessage = prepareErrorMessage();
  document.body.append(errorMessage);
  const errorButton = document.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    errorMessage.hidden = true;
  });
};

const clickResetButton = () => {
  resetButton.addEventListener('click', () => {
    form.reset();
  });
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  showAlert,
  getTemplateElement,
  getErrorMessage,
  getSuccessMessage,
  clickResetButton,
  debounce
};
