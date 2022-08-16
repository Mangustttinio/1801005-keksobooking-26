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
  regulateButtons,
} from './form-validation.js';

const ads = generateAds();
const card = createPopupElement(ads[1]);
renderPopup(card);

formActivation();

initFormValidation();

regulateButtons();
