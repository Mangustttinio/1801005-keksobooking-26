//import {
//  renderPopup,
//  createPopupElement
//} from './create-data/create-card.js';
//import {
// generateAds
//} from './create-data/generate-ads.js';
import {
  formActivation,
  //formDeactivation
} from './form-conditions.js';
import {
  initFormValidation,
  regulateButtons
} from './form-validation.js';

//const ads = generateAds();
//const card = createPopupElement(ads[1]);
//renderPopup(card);

formActivation();

initFormValidation();

regulateButtons();

const map = L.map('map-canvas')
  .setView({
    lat: 59.92749,
    lng: 30.31127,
  },10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
