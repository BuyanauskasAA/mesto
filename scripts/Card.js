export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._isLiked = false;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

      return cardElement;
  }

  _handleLikeButton(likeButton) {
    this._isLiked = !this._isLiked;
    if (this._isLiked) {
      likeButton.classList.add('card__like-button_active');
    } else {
      likeButton.classList.remove('card__like-button_active');
    }
  }

  _handleDeleteButton(deleteButton) {
    deleteButton.closest('.card').remove();
  }

  _handleCardImageClick() {
    const imagePopup = document.querySelector('.image-popup');
    const imagePopupImage = imagePopup.querySelector('.image-popup__image');
    const imagePopupCaption = imagePopup.querySelector('.image-popup__caption');
    imagePopupImage.src = this._link;
    imagePopupImage.alt = this._name;
    imagePopupCaption.textContent = this._name;
  }

  _setEventListeners(cardElement) {
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', () => {
      this._handleLikeButton(likeButton);
    });

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => {
      this._handleDeleteButton(deleteButton);
    })

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.addEventListener('click', () => {
      this._handleCardImageClick(cardImage);
    });
  }

  generateCard() {
    const cardElement = this._getTemplate();
    this._setEventListeners(cardElement);
    cardElement.querySelector('.card__image').setAttribute('src', this._link);
    cardElement.querySelector('.card__title').textContent = this._name;

    return cardElement;
  }
}
