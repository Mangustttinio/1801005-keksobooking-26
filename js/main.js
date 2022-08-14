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
} from './form-conditions.js';
import {
  regulateButtons
} from './form-validation.js';

const ads = generateAds();
const card = createPopupElement(ads[1]);
renderPopup(card);

formActivation();

const form = document.querySelector('.ad-form');
const selectCapacity = form.querySelector('#capacity');
const selectCapacityOption = selectCapacity.querySelectorAll('option');
const selectRoomNumber = form.querySelector('#room_number');

regulateButtons (
  selectRoomNumber,
  selectCapacityOption,
  selectCapacity
);
