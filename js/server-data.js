import {
  initMap
} from './map.js';
import {
  showAlert,
  getTemplateElement
} from './utils.js';
import {
  setAttribute
} from './create-data/create-card.js';
import {
  pristine
} from './form-validation.js';

const form = document.querySelector('.ad-form');
const resetButton = form.querySelector('.ad-form__reset');


const getData = () => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((objects) => {
      initMap(objects);
    })
    .catch(() => {
      showAlert('Ошибка получения данных', 'red');
    });
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
  form.addEventListener('click', () => {
    successMessage.remove();
  });
  form.reset();
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

const doFetchPost = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://26.javascript.pages.academy/keksobooking',
        {
          method: 'POST',
          body: formData,
        },
      ).then(() => getSuccessMessage())
        .catch(() => {
          getErrorMessage();
        });
    }
  });
};

const clickResetButton = () => {
  resetButton.addEventListener('click', () => {
    form.reset();
  });
};

export {getData, doFetchPost};
