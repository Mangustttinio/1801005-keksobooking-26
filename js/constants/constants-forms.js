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

export {
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
};
