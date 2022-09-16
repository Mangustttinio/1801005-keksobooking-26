const IMG_FILE_TYPES = [ 'img', 'png', 'jpeg', 'jpg'];
const PHOTO_WIDTH = 40;
const PHOTO_HEIGHT = 44;


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

const onChangePhoto = () => {
  const src = preparePhoto(adFormField);
  if (src) {
    imgForm.src = src;
  }
};

const onAddPhoto = () => {
  const imgElement = document.createElement('img');
  const src = preparePhoto(adFormUpload);
  if (src) {
    imgElement.src = src;
  }
  imgElement.width = PHOTO_WIDTH;
  imgElement.height = PHOTO_HEIGHT;
  const photo = adFormPhoto.cloneNode();
  photo.appendChild(imgElement);
  adFormPhotoContainer.appendChild(photo);
};

const adFormFieldChange = () => {
  adFormField.addEventListener('change', onChangePhoto);
};
const adFormUploadAdd = () => {
  adFormUpload.addEventListener('change', onAddPhoto);
};
const doAllActionsWithPhoto = () => {
  adFormFieldChange();
  adFormUploadAdd();
};

export {doAllActionsWithPhoto};
