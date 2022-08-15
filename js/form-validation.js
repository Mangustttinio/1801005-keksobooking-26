const form = document.querySelector('.ad-form');
const roomNumberOption = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0]
};

const regulateButtons = (selectRoomNumber,selectCapacityOption, selectCapacity) => {
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
const validateLength = (value) => value.length >= 30 && value.length <= 100;

const validatePrice = (value) => value <= 100000;

const pristine = new Pristine(form, {
  classTo: 'ad-form__block',
  errorTextParent: 'ad-form__block',
  errorTextClass: 'ad-form__error'
}
);

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

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export {validateLength, validatePrice, regulateButtons};
