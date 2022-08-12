import {
  getRandomPositiveFloat,
  getRandomPositiveInteger
} from '../math-functions/get-random-positive.js';

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LAT_ROUNDING = 5;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const LNG_ROUNDING = 5;
const DEFAULT_GENERATE_NUM = 10;
const GUEST_MIN = 1;
const GUEST_MAX = 100;
const PRICE_MIN = 1;
const PRICE_MAX = 1000000;

const titlesList = [
  'Введите текст',
  'Заполните пусты поля',
  'Заполните пустую форму',
  'Отсутствует информация'
];

const featureType = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const typeOfRooms = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const checkinVariants = [
  '12:00',
  '13:00',
  '14:00'
];

const checkoutVariants = [
  '12:00',
  '13:00',
  '14:00'
];

const photoVariants = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomElementFromArray = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const getFeatures = () => featureType.filter(()=> Math.random() >= 0.5);
const getPhotos = () => photoVariants.filter(()=> Math.random() >= 0.5);

const generateOffer = (address) => {
  const offer = {
    title: getRandomElementFromArray(titlesList),
    address,
    price: getRandomPositiveInteger(PRICE_MIN, PRICE_MAX),
    rooms: getRandomPositiveInteger(0, typeOfRooms.length - 1),
    types: getRandomElementFromArray(typeOfRooms),
    guests: getRandomPositiveInteger(GUEST_MIN, GUEST_MAX),
    checkin: getRandomElementFromArray(checkinVariants),
    checkout: getRandomElementFromArray(checkoutVariants),
    features: getFeatures(),
    description: ' Клуб Отель Мирамар — прекрасный выбор для тех, кто хочет восстановить силы.',
    photos: getPhotos()
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
      avatar: `img/avatars/user${index < 10 ? `0${index +1}` : index + 1}.png`
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
