const IMG_FILE_TYPES = [ 'img', 'png', 'jpeg', 'jpg'];

const adFormField = document.querySelector('.ad-form__field input[type=file]');
const adFormHeaderPreview = document.querySelector('.ad-form-header__preview');
const imgForm = adFormHeaderPreview.querySelector('img');
const adFormUpload = document.querySelector('.ad-form__upload input[type=file]');
const adFormPhoto = document.querySelector('.ad-form__photo');
const adFormPhotoContainer = document.querySelector('.ad-form__photo-container');

const preparePhoto = (button) => {
  const file = button.files[0];
  const fileName = file.name.toLowerCase();
  const matches = IMG_FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    return URL.createObjectURL(file);
  }
};

const changePhoto = () => {
  const src = preparePhoto(adFormField);
  if (src) {
    imgForm.src = src;
  }
};

const addPhoto = () => {
  const imgElement = document.createElement('img');
  const src = preparePhoto(adFormUpload);
  if (src) {
    imgElement.src = src;
  }
  imgElement.width = 40;
  imgElement.height = 44;
  const photo = adFormPhoto.cloneNode();
  photo.appendChild(imgElement);
  adFormPhotoContainer.appendChild(photo);
};

const doAllActionsWithPhoto = () => {
  adFormUpload.addEventListener('change', changePhoto);
  adFormField.addEventListener('change', addPhoto);
};

export {doAllActionsWithPhoto};
