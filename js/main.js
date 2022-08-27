import {
  generateAds
} from './create-data/generate-ads.js';
import {
  doFetchPost,
  initFormValidation,
  regulateButtons
} from './form-validation.js';
import { initMap } from './map.js';
import {
  getPriceFromSlider
} from './slider.js';
import {
  showAlert
} from './utils.js';

const ads = generateAds(10);


initFormValidation();

regulateButtons();

initMap(ads);

getPriceFromSlider();

fetch('https://26.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((objects) => {
    initMap(objects);
  })
  .catch(() => {
    showAlert('Ошибка получения данных', 'red');
  });

doFetchPost();
