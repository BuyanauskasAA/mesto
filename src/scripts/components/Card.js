export default class Card {
  constructor({
    cardInfo,
    handlers,
    ifDeleteButtonDisabled,
    isLiked,
    templateSelector,
  }) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._cardId = cardInfo._id;

    this._handleCardClick = handlers.handleCardClick;
    this._handleCardDelete = handlers.handleCardDelete;
    this._handleCardLike = handlers.handleCardLike;

    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();

    this._isLiked = isLiked;
    this._likesCount = cardInfo.likes.length;
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._likesCounter = this._cardElement.querySelector(".card__like-counter");

    this._ifDeleteButtonDisabled = ifDeleteButtonDisabled;
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _handleLikeButton() {
    this._isLiked = !this._isLiked;
    this._likeButton.classList.toggle("card__like-button_active");
    this._handleCardLike(this._cardId, this._isLiked, this._likesCounter);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleCardDelete(this._cardId, this._deleteButton);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._likesCounter.textContent = this._likesCount;
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    }

    if (this._ifDeleteButtonDisabled) {
      this._deleteButton.remove();
    }

    return this._cardElement;
  }
}
