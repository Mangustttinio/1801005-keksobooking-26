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
import {
  validateLength,
  validatePrice,
  regulateButtons
} from './create-data/form-validation.js';

const ads = generateAds();
const card = createPopupElement(ads[1]);
renderPopup(card);

formActivation();

const form = document.querySelector('.ad-form');
const selectCapacity = form.querySelector('#capacity');
const selectCapacityOption = selectCapacity.querySelectorAll('option');
const selectRoomNumber = form.querySelector('#room_number');
//const buttonUpload = document.querySelector('.ad-form__submit');


regulateButtons (
  selectRoomNumber,
  selectCapacityOption,
  selectCapacity
);

const pristine = new Pristine(form, {
  classTo: 'ad-form__block',
  errorTextParent: 'ad-form__block',
  errorTextClass: 'ad-form__error'
},
false
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

form.addEventListener('submit', () => {
  pristine.validate();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
