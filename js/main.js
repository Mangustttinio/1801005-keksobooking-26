import {
  renderPopup,
  createPopupElement
} from './create-data/create-card.js';
import {
  generateAds
} from './create-data/generate-ads.js';

const ads = generateAds();
const card = createPopupElement(ads[1]);
renderPopup(card);
