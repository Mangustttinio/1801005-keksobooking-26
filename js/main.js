import {
  generateAds
} from './create-data/generate-ads.js';
import {
  initFormValidation,
  regulateButtons
} from './form-validation.js';
import { initMap } from './map.js';
import {
  getPriceFromSlider
} from './slider.js';

const ads = generateAds(10);

initFormValidation();

regulateButtons();

initMap(ads);

getPriceFromSlider();
