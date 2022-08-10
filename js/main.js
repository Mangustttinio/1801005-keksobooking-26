import {
  renderPopup
} from './create-data/create-card.js';
import {
  generateAds
} from './create-data/generate-ads.js';

renderPopup(generateAds(1));
