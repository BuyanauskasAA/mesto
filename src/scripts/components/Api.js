export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  addCard(body) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  setUserInfo(body) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }

  setUserAvatar(body) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        return response.json;
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    });
  }
}
