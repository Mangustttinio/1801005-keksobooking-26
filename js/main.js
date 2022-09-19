import {
  initFormValidation,
  regulateButtons
} from './form-validation.js';
import {
  initMap,
  initListeners,
  resetMap,
} from './map.js';
import {
  getPriceFromSlider
} from './slider.js';
import {
  sendData,
  getData
} from './server-data.js';
import {
  clickResetButton,
  showAlert,
  getSuccessMessage,
  getErrorMessage,
} from './utils.js';
import {
  getFilteredMap
} from './filter.js';
import {
  pristine
} from './form-validation.js';
import { doAllActionsWithPhoto } from './photo.js';
import { formDeactivation, formActivation } from './form-conditions.js';

const form = document.querySelector('.ad-form');
initFormValidation();

regulateButtons();

getPriceFromSlider();
formDeactivation();
initMap(() => {
  getData((ads) => {
    formActivation();
    getFilteredMap(ads);
    initListeners(ads);
    resetMap(ads);
  }, showAlert);});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    sendData(new FormData(evt.target), getSuccessMessage, getErrorMessage);
  }
}
);

doAllActionsWithPhoto();

clickResetButton();

