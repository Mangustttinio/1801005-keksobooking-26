const form = document.querySelector('.ad-form');
const selectCapacity = form.querySelector('#capacity');
const selectCapacityOption = selectCapacity.querySelectorAll('option');
const selectRoomNumber = form.querySelector('#room_number');
const selectPriceType = form.querySelector('#type');
const inputPriceType = form.querySelector('#price');
const selectTimeIn = form.querySelector('#timein');
const selectTimeOut = form.querySelector('#timeout');
const selectAddress = form.querySelector('#address');
const selectTitle = form.querySelector('#title');

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
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error'
});

const validateLength = (value) => value.length >= 30 && value.length <= 100;

const validatePrice = (value) => value <= 100000;

const onChangeTimeIn = (evt) => { selectTimeIn.value = evt.target.value; };

const onChangeTimeOut = (evt) => { selectTimeOut.value = evt.target.value; };

const onChangeAddress = (value) => value.length > 0;

const regulateButtons = () => {
  selectRoomNumber.addEventListener('change', (evt) => {
    const capacity = roomNumberOption[evt.target.value];
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
    selectTitle,
    validateLength,
    'от 30 до 100 символов'
  );
  pristine.addValidator(
    selectPriceType,
    validatePrice,
    'превышено допустимое значение цены'
  );
  pristine.addValidator(
    inputPriceType,
    validateMinPrice,
    getAmountErrorMessage
  );
  pristine.addValidator(
    selectAddress,
    onChangeAddress,
    'Попробуйте выбрать адрес меткой'
  );
};

export {regulateButtons, initFormValidation, pristine};
