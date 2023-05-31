export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handlePopupEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  open() {
    document.addEventListener('keydown', this._handlePopupEscClose);
    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handlePopupEscClose);
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      const targetClassList = event.target.classList;
      if (
        targetClassList.contains('popup__close-button') ||
        targetClassList.contains('popup')
      ) {
        this.close();
      }
    });
  }
}
