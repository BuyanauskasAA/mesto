import Popup from './Popup';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupSubmitButton = this._popupForm.querySelector(
      '.popup__submit-button'
    );
    this._submitButtonText = this._popupSubmitButton.textContent;
  }

  renderLoading(isLoading, loadingText = 'Удаление...') {
    if (isLoading) {
      this._popupSubmitButton.textContent = loadingText;
    } else {
      this._popupSubmitButton.textContent = this._submitButtonText;
    }
  }

  setSubmitHandler(handleSubmit) {
    this._handleSumbit = handleSubmit;
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSumbit();
    });
    super.setEventListeners();
  }
}
