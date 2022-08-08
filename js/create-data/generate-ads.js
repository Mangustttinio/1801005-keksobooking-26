import {
  LAT_MIN,
  LAT_MAX,
  LAT_ROUNDING,
  LNG_MIN,
  LNG_MAX,
  LNG_ROUNDING,
  DEFAULT_GENERATE_NUM,
  GUEST_MIN,
  GUEST_MAX,
  PRICE_MIN,
  PRICE_MAX,
  titlesList,
  featureType,
  typeOfRooms,
  checkinVariants,
  checkoutVariants,
  photoVariants
} from '../constants/constants-forms.js';

import {
  getRandomPositiveFloat
} from '../math-functions/get-random-positive-float.js';

import {
  getRandomPositiveInteger
} from '../math-functions/get-random-positive-integer.js';

const getRandomElementFromArray = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const getFeatures = () => featureType.filter(()=> Math.random() >= 0.5);

const generateOffer = (address) => {
  const offer = {
    title: getRandomElementFromArray(titlesList),
    address,
    price: getRandomPositiveInteger(PRICE_MIN, PRICE_MAX),
    rooms: getRandomPositiveInteger(0, typeOfRooms.length - 1),
    guests: getRandomPositiveInteger(GUEST_MIN, GUEST_MAX),
    checkin: getRandomElementFromArray(checkinVariants),
    checkout: getRandomElementFromArray(checkoutVariants),
    features: getFeatures(),
    description: ' Клуб Отель Мирамар — прекрасный выбор для тех, кто хочет восстановить силы.',
    photos: photoVariants.filter(()=> Math.random() >= 0.5)
  };
  return offer;
};

const generateAd = (index) => {
  const locationObj = {
    lat: getRandomPositiveFloat(LAT_MIN, LAT_MAX, LAT_ROUNDING),
    lng: getRandomPositiveFloat(LNG_MIN, LNG_MAX, LNG_ROUNDING)
  };

  const address = `${locationObj.lat},${locationObj.lng}`;

  return {
    author: {
      avatar: `img/avatars/user${index < 10 ? `0${index}` : index}.png`
    },
    offer: generateOffer(address),
    location: locationObj
  };
};

const generateAds = (generateNum = DEFAULT_GENERATE_NUM) => {
  const ads = [];
  for (let index = 1; index <= generateNum; index++){
    ads[index] = generateAd(index);
  }

  return ads;
};

export {generateAds};
