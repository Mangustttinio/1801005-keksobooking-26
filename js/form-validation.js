const form = document.querySelector('.ad-form');
const selectCapacity = form.querySelector('#capacity');
const selectCapacityOption = selectCapacity.querySelectorAll('option');
const selectRoomNumber = form.querySelector('#room_number');
const selectPriceType = form.querySelector('#type');
const inputPriceType = form.querySelector('#price');
const selectTimeIn = form.querySelector('#timein');
const selectTimeInOption = selectTimeIn.querySelectorAll('option');
const selectTimeOut = form.querySelector('#timeout');
const selectTimeOutOption = selectTimeOut.querySelectorAll('option');

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

const timeMap = {
  '12:00': '12:00',
  '13:00': '13:00',
  '14:00': '14:00'
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__block',
  errorTextParent: 'ad-form__block',
  errorTextClass: 'ad-form__error'
}
);

const validateLength = (value) => value.length >= 30 && value.length <= 100;

const validatePrice = (value) => value <= 100000;

const regulateTimeOut = () => {
  selectTimeIn.addEventListener('change', (event) => {
    const targetTime = timeMap[event.target.value];
    selectTimeOutOption.forEach((iterator) => {
      if (iterator.value === targetTime) {
        iterator.selected = true;
      }
    });
  });
};

const regulateTimeIn = () => {
  selectTimeOut.addEventListener('change', (event) => {
    const targetTime = timeMap[event.target.value];
    selectTimeInOption.forEach((iterator) => {
      if (iterator.value === targetTime) {
        iterator.selected = true;
      }
    });
  });
};

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

export {validateLength, validatePrice, regulateButtons, initFormValidation, regulateTimeOut, regulateTimeIn};
