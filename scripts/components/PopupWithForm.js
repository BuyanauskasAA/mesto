import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSumbitButton }) {
    super(popupSelector);
    this._handleSumbitButton = handleSumbitButton;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSumbitButton(this._getInputValues());
    });
    super.setEventListeners();
  }
}
