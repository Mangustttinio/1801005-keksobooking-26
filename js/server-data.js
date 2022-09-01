
const getData = (onSuccess, onError) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {
      onError('Ошибка получения данных');
    });
};

const sendData = (formData, onSuccess, onError) => {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  ).then(onSuccess)
    .catch(onError);
};

export {
  sendData,
  getData
};
