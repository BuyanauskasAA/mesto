import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSumbitButton }) {
    super(popupSelector);
    this._handleSumbitButton = handleSumbitButton;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._popupSubmitButton = this._popupForm.querySelector(
      ".popup__submit-button"
    );
    this._submitButtonText = this._popupSubmitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  renderLoading(isLoading, loadingText = "Сохранение...") {
    if (isLoading) {
      this._popupSubmitButton.textContent = loadingText;
    } else {
      this._popupSubmitButton.textContent = this._submitButtonText;
    }
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSumbitButton(this._getInputValues());
    });
    super.setEventListeners();
  }
}
