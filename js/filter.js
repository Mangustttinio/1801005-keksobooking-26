import { initMap } from './map.js';

const mapFilter = document.querySelector('.map__filters');
const housingType = mapFilter.querySelector('#housing-types');
const housingPrice = mapFilter.querySelector('#housing-price');
const housingRoom = mapFilter.querySelector('#housing-rooms');
const housingGuest = mapFilter.querySelector('#housing-guests');
const housingFeatures = Array.from(mapFilter.querySelectorAll('.map__checkbox'));

const filterHousingType = (place) => housingType.value === place.offer.type || housingType.value === 'any';

const filterHousingPrice = (place) => {
  if (housingPrice.value === 'low' && place.offer.price < 10000) {
    return true;
  }
  if (housingPrice.value === 'middle' && place.offer.price >= 10000 && place.offer.price <= 50000) {
    return true;
  }
  if (housingPrice.value === 'middle' && place.offer.price >= 10000) {
    return true;
  }
  if (housingPrice.value === 'any') {
    return true;
  }
};

const filterHousingRooms = (place) => {
  if (housingRoom.value === place.offer.rooms) {
    return true;
  }
  if (housingRoom.value === 'any') {
    return true;
  }
};

const filterHousingGuests = (place) => {
  if (housingGuest.value === place.offer.guests) {
    return true;
  }
  if (housingGuest.value === 'any') {
    return true;
  }
};

const filterHousingFeatures = (place) => {
  housingFeatures.forEach((feature) => {
    if (feature.checked) {
      return place.offer.features.some((value) => value === feature.value);
    }
  });
};

const filterPlaces = (places) => {
  const filteredPlaces = [];
  for (const place of places) {
    const filter = filterHousingType(place)
      && filterHousingPrice(place)
      && filterHousingRooms(place)
      && filterHousingGuests(place)
      && filterHousingGuests(place)
      && filterHousingFeatures(place);
    if (filter) {
      filteredPlaces.push(place);
    }
  }
  return filteredPlaces;
};

const getFilteredMap = (places) => {
  mapFilter.addEventListener('change', () => {
    const filteredPlaces = filterPlaces(places);
    initMap(filteredPlaces);
  });
};

export {getFilteredMap};

