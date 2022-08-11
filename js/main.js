import {
  renderPopup,
  insertCardToMap
} from './create-data/create-card.js';
import {
  generateAds
} from './create-data/generate-ads.js';
import {
  formActivation,
  formDeactivation
} from './create-data/form-conditions.js';

insertCardToMap(renderPopup(generateAds(1)));

formDeactivation();
