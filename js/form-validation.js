import { getTemplateElement } from './utils.js';
import { setAttribute } from './create-data/create-card.js';
const form = document.querySelector('.ad-form');
const selectCapacity = form.querySelector('#capacity');
const selectCapacityOption = selectCapacity.querySelectorAll('option');
const selectRoomNumber = form.querySelector('#room_number');
const selectPriceType = form.querySelector('#type');
const inputPriceType = form.querySelector('#price');
const selectTimeIn = form.querySelector('#timein');
const selectTimeOut = form.querySelector('#timeout');


const roomNumberOption = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0]
};

const minPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__block',
  errorTextParent: 'ad-form__block',
  errorTextClass: 'ad-form__error'
}
);

const validateLength = (value) => value.length >= 30 && value.length <= 100;

const validatePrice = (value) => value <= 100000;

const onChangeTimeIn = (event) => { selectTimeIn.value = event.target.value; };

const onChangeTimeOut = (event) => { selectTimeOut.value = event.target.value; };

const regulateButtons = () => {
  selectRoomNumber.addEventListener('change', (event) => {
    const capacity = roomNumberOption[event.target.value];
    selectCapacityOption.forEach((iterator) => {
      if (capacity.includes(Number(iterator.value))) {
        iterator.removeAttribute('disabled');
        selectCapacity.value = iterator.value;
      }
      else {
        iterator.setAttribute('disabled', true);
      }
    });
  });
};

const validateMinPrice = (value) => {
  const unit = selectPriceType.value;
  return parseInt(value, 10) >= minPrice[unit];
};
function getAmountErrorMessage () {
  const unit = selectPriceType.value;
  return `Не меньше ${minPrice[unit]}`;
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

const initFormValidation = () => {
  selectTimeOut.addEventListener('change', onChangeTimeIn);
  selectTimeIn.addEventListener('change', onChangeTimeOut);

  pristine.addValidator(
    form.querySelector('#title'),
    validateLength,
    'от 30 до 100 символов'
  );
  pristine.addValidator(
    form.querySelector('#price'),
    validatePrice,
    'превышено допустимое значение цены'
  );
  pristine.addValidator(
    inputPriceType,
    validateMinPrice,
    getAmountErrorMessage
  );
};

const getSuccessMessage = () => {
  const prepareSuccessMessage = () => {
    const success = getTemplateElement('#success');
    const successNode = success.cloneNode(true);
    const setNodeAttribute = setAttribute(successNode);
    setNodeAttribute('success__message', 'Отправка была проведена успешно');
    return successNode;
  };

  const successMessage = prepareSuccessMessage();
  document.body.append(successMessage);
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if(event.key === 'Escape'){
      successMessage.hidden = true;
    }
  });
  form.addEventListener('click', () => {
    successMessage.hidden = true;
  });
};

const getErrorMessage = () => {
  const prepareErrorMessage = () => {
    const error = getTemplateElement('#error');
    const errorNode = error.cloneNode(true);
    const setNodeAttribute = setAttribute(errorNode);
    setNodeAttribute('error_message', 'Возникла ошибка при отправке');
    return errorNode;
  };
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
      ).then(() => getSuccessMessage);
    } else {
      getErrorMessage();
    }
  });
};

export {regulateButtons, initFormValidation, doFetchPost};
