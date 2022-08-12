const getTemplateElement = (selector) => {
  const templateElement = document.querySelector(selector);
  if (templateElement && templateElement.content.children) {
    return templateElement.content.children[0];
  }
};

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

const createFeatureElements = (features) => features.map(createFeatureElement);

const setAttribute = (element, data, attr = 'textContent') => {
  if (element && data) {
    element[attr] = data;
  }
};

const setAttributeV2 = (element) => (selector, data, attr = 'textContent') => {
  if (element && data) {
    const subElement = element.querySelector(selector);
    if (subElement) {
      subElement[attr] = data;
    }
  }
};

const createPopupElement = (ads) => {
  const cardNode = cardTemplate.cloneNode(true);
  setAttribute(
    cardNode.querySelector('popup__title'), ads.offer.title);
  const setCardAttribute = setAttributeV2(cardNode);
  setCardAttribute('.popup__title', ads.offer.title);
  setCardAttribute('.popup__text--address', ads.offer.address);
  setCardAttribute('.popup__text--price', `${ads.offer.price}₽/ночь`);
  setCardAttribute('.popup__type', housingTypes[ads.offer.types]);
  setCardAttribute('.popup__text--capacity', `Заезд после ${ads.offer.checkin}, выезд до ${ads.offer.checkout}`);
  setCardAttribute('.popup__description', ads.offer.description);

  cardNode.querySelector('.popup__avatar').src = ads.author.avatar;

  cardNode.querySelector('.popup__features').innerHTML = '';
  cardNode.querySelector('.popup__features').append(...createFeatureElements(ads.offer.features));
  cardNode.querySelector('.popup__photo').textContent = ads.offer.photos;
  return cardNode;
};

const renderPopup = (popup) => {
  mapCanvas.appendChild(popup);
};

export {createPopupElement, renderPopup};
