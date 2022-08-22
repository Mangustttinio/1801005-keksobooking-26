const slider = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const getPriceFromSlider = () => {
  slider.noUiSlider.on('update', () => {
    price.value = slider.noUiSlider.get();
  });
};

export {getPriceFromSlider};
