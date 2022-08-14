import {
  renderPopup,
  createPopupElement
} from './create-data/create-card.js';
import {
  generateAds
} from './create-data/generate-ads.js';
import {
  formActivation,
  //formDeactivation
} from './create-data/form-conditions.js';
const ads = generateAds();
const card = createPopupElement(ads[1]);
renderPopup(card);

formActivation();

const form = document.querySelector('.ad-form');
const selectCapacity = form.querySelector('#capacity');
const selectCapacityOption = selectCapacity.querySelectorAll('option');
const selectRoomNumber = form.querySelector('#room_number');
const selectRoomNumberOption = selectRoomNumber.querySelectorAll('option');
const buttonUpload = document.querySelector('.ad-form__submit');

const roomNumberOption = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0]
};

selectRoomNumber.addEventListener('change', (event) => {
  const capacity = roomNumberOption[event.target.value];
  for (const iterator of selectCapacityOption) {
    if (capacity.includes(Number(iterator.value))) {
      iterator.removeAttribute('disabled');
      selectCapacity.value = iterator.value;
    }
    else {
      iterator.setAttribute('disabled', true);
    }
  }
});

const pristine = new Pristine(form, {
  classTo: 'ad-form__block',
  errorTextParent: 'ad-form__block',
  errorTextClass: 'ad-form__error'
}
);


const validateLength = (value) => value.length >= 30 && value.length <= 100;

const validatePrice = (value) => value <= 100000;

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

form.addEventListener('submit', () => {
  pristine.validate();
});

/*
form.addEventListener('submit', (evt) => {
  if (pristine.validate() === false ) {
    evt.preventDefault();
    buttonUpload.setAttribute('disabled', true);
  }
  else {
    buttonUpload.removeAttribute('disabled');
  }
});
*/

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
