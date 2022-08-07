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
const titleList = ['Введите текст', 'Заполните пусты поля', 'Заполните пустую форму', 'Отсутствует информация'];
const typeOfFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getFeatures = () => {
  const featureChoice = [];
  for (let index = 0; index <= typeOfFeatures.length - 1; index++){
    if (getRandomPositiveInteger(1,2) === 1){
      featureChoice.push(typeOfFeatures[index]);
    }
  }
  return featureChoice;
};

//author = {
//avatar: `img/avatars/user${value < 10 ? `0${value}` : value}.png`
