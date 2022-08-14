const roomNumberOption = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0]
};

const regulateButtons = (selectRoomNumber,selectCapacityOption, selectCapacity) => {
  selectRoomNumber.addEventListener('change', (event) => {
    const capacity = roomNumberOption[event.target.value];
    for (const iterator of selectCapacityOption) {
      if (capacity.includes(Number(iterator.value))) {
        iterator.removeAttribute('disabled');
        selectCapacity.value = iterator.value;
      }
      else {
        iterator.setAttribute('disabled', true);
      }
    }
  });
};

const validateLength = (value) => value.length >= 30 && value.length <= 100;

const validatePrice = (value) => value <= 100000;

export {validateLength, validatePrice, regulateButtons};
