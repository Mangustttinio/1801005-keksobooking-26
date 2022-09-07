import {
  initFormValidation,
  regulateButtons
} from './form-validation.js';
import {
  initMap
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


const form = document.querySelector('.ad-form');

initFormValidation();

regulateButtons();

getPriceFromSlider();

getData((ads) => {
  initMap(ads);
  getFilteredMap(ads);
}, showAlert);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    sendData(new FormData(evt.target), getSuccessMessage, getErrorMessage);
  }
}
);

clickResetButton();

