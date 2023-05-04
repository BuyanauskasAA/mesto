export class Card {
  constructor(data, templateSelector, popupData) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;

    this._openPopup = popupData.openPopup;
    this._popup = popupData.popup;
    this._popupImage = popupData.popupImage;
    this._popupCaption = popupData.popupCaption;

    this._isLiked = false;
    this._cardElement = this._getTemplate();
    this._likeButton = this._cardElement.querySelector('.card__like-button');
    this._deleteButton = this._cardElement.querySelector('.card__delete-button');
    this._cardImage = this._cardElement.querySelector('.card__image');
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  _handleLikeButton() {
    this._isLiked = !this._isLiked;
    this._likeButton.classList.toggle('card__like-button_active');
  }

  _handleDeleteButton() {
    this._deleteButton.closest('.card').remove();
  }

  _handleCardImageClick() {
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    this._popupCaption.textContent = this._name;
    this._openPopup(this._popup);
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteButton();
    })
    this._cardImage.addEventListener('click', () => {
      this._handleCardImageClick();
    });
  }

  generateCard() {
    this._setEventListeners();
    this._cardElement.querySelector('.card__image').setAttribute('src', this._link);
    this._cardElement.querySelector('.card__title').textContent = this._name;

    return this._cardElement;
  }
}
