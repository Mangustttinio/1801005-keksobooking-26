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
    'https://26.javascript.pages.academy/keksobookin',
    {
      method: 'POST',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  }).catch(onError);
};

export {
  sendData,
  getData
};
