const formType = document.querySelector('.ad-form');
const mapFilterType = document.querySelector('.map__filters');
const mapFilterChildren = mapFilterType.children;
const formChildren = formType.children;


const formDeactivation = () => {
  formType.classList.add('ad-form__disabled');
  mapFilterType.classList.add('map__filters--disabled');
  for (const value of mapFilterChildren) {
    value.setAttribute('disabled', 'true');
  }
  for (const value of formChildren) {
    value.setAttribute('disabled', 'true');
  }
};

const formActivation = () => {
  formType.classList.remove('ad-form--disabled');
  mapFilterType.classList.remove('map__filter--disabled');
  for (const value of mapFilterChildren) {
    value.removeAttribute('disabled');
  }
  for (const value of formChildren) {
    value.removeAttribute('disabled');
  }
};


export {formActivation, formDeactivation};
