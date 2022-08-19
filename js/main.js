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
  initFormValidation,
  regulateButtons
} from './form-validation.js';
import { initMap } from './map.js';

const ads = generateAds(10);
//const card = createPopupElement(ads);

formActivation();

initFormValidation();

regulateButtons();


initMap(ads);
