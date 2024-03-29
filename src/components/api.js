const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-6',
  headers: {
    authorization: '17710a06-c55b-47f2-bfed-47b83f1cf001',
    'Content-Type': 'application/json',
  },
};

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers,
  })
  .then((res) => checkResponse(res));
};

function getUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers,
  })
  .then((res) => checkResponse(res));
};

function editUserData(profileTitle, profileDescription) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: profileTitle,
      about: profileDescription,
    }),
  })
  .then((res) => checkResponse(res));
};

 function editUserImage(profileImage) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: profileImage,
    }),
  })
  .then((res) => checkResponse(res));
};

function creatureCard(placeName, placeLink) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: placeName,
      link: placeLink,
    }),
  })
  .then((res) => checkResponse(res));
};

function putLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then((res) => checkResponse(res));
};

function removeLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => checkResponse(res));
};

function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => checkResponse(res));
};

export { getInitialCards, getUserData, editUserData, editUserImage, creatureCard, putLike, removeLike, deleteCard }
