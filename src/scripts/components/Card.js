export default class Card {
  constructor({ cardInfo, templateSelector, handlers }) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._cardId = cardInfo._id;

    this._handleCardClick = handlers.handleCardClick;
    this._handleCardDelete = handlers.handleCardDelete;
    this._handleCardLike = handlers.handleCardLike;

    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();

    this._likeButton = this._cardElement.querySelector('.card__like-button');
    this._likesCounter = this._cardElement.querySelector('.card__like-counter');

    this._deleteButton = this._cardElement.querySelector(
      '.card__delete-button'
    );

    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardTitle = this._cardElement.querySelector('.card__title');
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
  }

  getId() {
    return this._cardId;
  }

  enableLike(isLiked) {
    this._isLiked = isLiked;
    if (isLiked) {
      this._likeButton.classList.add('card__like-button_active');
    } else {
      this._likeButton.classList.remove('card__like-button_active');
    }
  }

  isCardLiked() {
    return this._isLiked;
  }

  updateLikeCounter(count) {
    this._likesCounter.textContent = count;
  }

  disableDeleteButton(isDisabled) {
    if (isDisabled) {
      this._deleteButton.remove();
    }
  }

  removeCard() {
    this._deleteButton.closest('.card').remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleCardLike();
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleCardDelete();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    return this._cardElement;
  }
}
