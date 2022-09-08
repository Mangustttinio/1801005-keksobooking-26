const IMG_FILE_TYPES = [ 'img', 'png', 'jpeg', 'jpg'];

const adFormField = document.querySelector('.ad-form__field input[type=file]');
const adFormHeaderPreview = document.querySelector('.ad-form-header__preview');
const imgForm = adFormHeaderPreview.querySelector('img');
const adFormUpload = document.querySelector('.ad-form__upload input[type=file]');
const adFormPhoto = document.querySelector('.ad-form__photo');

const preparePhoto = (button, photoArea, image) => {
  button.addEventListener('change', () => {
    const file = button.files[0];
    const fileName = file.name.toLowerCase();
    const matches = IMG_FILE_TYPES.some((it) => fileName.endsWith(it));
    photoArea.appendChild(image);
    if (matches) {
      image.src = URL.createObjectURL(file);
    }
  });
};

const changePhoto = () => {
  preparePhoto(adFormField, adFormHeaderPreview, imgForm);
};

const addPhoto = () => {
  const imgElement = document.createElement('img');
  imgElement.alt = '';
  imgElement.src = '';
  adFormPhoto.appendChild(imgElement);
  preparePhoto(adFormUpload, adFormPhoto, imgElement);
};

const doAllActionsWithPhoto = () => {
  addPhoto();
  changePhoto();
};

export {doAllActionsWithPhoto};
