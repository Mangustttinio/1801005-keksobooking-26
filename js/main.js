import {
  renderPopup,
  insertCardToMap
} from './create-data/create-card.js';
import {
  generateAds
} from './create-data/generate-ads.js';

insertCardToMap(renderPopup(generateAds(1)));
