import {
  generateAds
} from './generate-ads.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const addingArray = generateAds();
const cardTemplateFragment = document.createDocumentFragment();
const mapCanvas = document.querySelector('.map__canvas');

const getLodgingType = (lodging) => {
  switch(lodging){
    case 'hotel':
      return 'Отель';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало';
    case 'flat':
      return 'Квартира';
  }
};

const getPopup = () => {
  addingArray.forEach((ads) =>{
    const cardNode = cardTemplate.cloneNode(true);
    cardNode.querySelector('.popup__title').textContent = ads.offer.title;
    cardNode.querySelector('.popup__text--address').textContent = ads.offer.address;
    cardNode.querySelector('.popup__text--price').textContent = `${ads.offer.price}₽/ночь`;
    cardNode.querySelector('.popup__type').textContent = getLodgingType(ads.offer.type);
    cardNode.querySelector('.popup__text--capacity').textContent = `Заезд после ${ads.offer.checkin} , выезд до ${ads.offer.checkout}`;
    cardNode.querySelector('.popup__features').textContent = ads.offer.features;
    cardNode.querySelector('.popup__description').textContent = ads.offer.description;
    cardNode.querySelector('.popup__photo').textContent = ads.offer.photos;
    cardNode.querySelector('.popup__avatar').src = ads.author.avatar;
    cardTemplateFragment.appendChild(cardNode);
  });
  mapCanvas.appendChild(cardTemplateFragment);
};

export {getPopup};
