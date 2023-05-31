export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _request(path, options) {
    return fetch(`${this._baseUrl}/${path}`, options).then(this._checkResponse);
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getInitialCards() {
    return this._request("cards", {
      method: "GET",
      headers: this._headers,
    });
  }

  putLike(cardId) {
    return this._request(`cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  deleteLike(cardId) {
    return this._request(`cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  addCard(body) {
    return this._request("cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(body),
    });
  }

  deleteCard(cardId) {
    return this._request(`cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._request("users/me", {
      method: "GET",
      headers: this._headers,
    });
  }

  setUserInfo(body) {
    return this._request("users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    });
  }

  setUserAvatar(body) {
    return this._request("users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    });
  }
}
