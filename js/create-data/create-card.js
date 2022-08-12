import { getTemplateElement } from '../utils.js';

const cardTemplate = getTemplateElement('#card');
const mapCanvas = document.querySelector('.map__canvas');

const housingTypes = {
  hotel: 'Отель',
  house: 'Дом',
  bungalow: 'Бунгало',
  flat: 'Квартира',
  palace: 'Дворец'
};

const createFeatureElement = (featureName) => {
  const featureElement = document.createElement('li');
  featureElement.classList.add(`popup__feature--${featureName}`);
  featureElement.classList.add('popup__feature');
  return featureElement;
};

const createPhotoElement = (PhotoSrc) => {
  const photoElement = document.createElement('img');
  photoElement.classList.add('popup__photo');
  photoElement.width = '45';
  photoElement.height = '40';
  photoElement.src = PhotoSrc;
  return photoElement;
};

const createElements = (element, func) => element.map(func);

const setAttribute = (element) => (selector, data, attr = 'textContent') => {
  if (element && data) {
    const subElement = element.querySelector(selector);
    if (subElement) {
      subElement[attr] = data;
    }
  }
};

const createPopupElement = (ads) => {
  const cardNode = cardTemplate.cloneNode(true);
  const setCardAttribute = setAttribute(cardNode);
  setCardAttribute('popup__title', ads.offer.title);
  setCardAttribute('.popup__title', ads.offer.title);
  setCardAttribute('.popup__text--address', ads.offer.address);
  setCardAttribute('.popup__text--price', `${ads.offer.price}₽/ночь`);
  setCardAttribute('.popup__type', housingTypes[ads.offer.types]);
  setCardAttribute('.popup__text--capacity', `Заезд после ${ads.offer.checkin}, выезд до ${ads.offer.checkout}`);
  setCardAttribute('.popup__description', ads.offer.description);
  setCardAttribute('.popup__avatar', ads.author.avatar, 'src');

  cardNode.querySelector('.popup__features').innerHTML = '';
  cardNode.querySelector('.popup__features').append(...createElements(ads.offer.features, createFeatureElement));

  cardNode.querySelector('.popup__photos').innerHTML = '';
  cardNode.querySelector('.popup__photos').append(...createElements(ads.offer.photos, createPhotoElement));
  return cardNode;
};

const renderPopup = (popup) => {
  mapCanvas.appendChild(popup);
};

export { createPopupElement, renderPopup };
