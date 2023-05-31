import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleSumbitButton }) {
    super(popupSelector);
    this._handleSumbitButton = handleSumbitButton;
    this._actionToConfirm;
    this._popupForm = this._popup.querySelector(".popup__form");
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSumbitButton();
    });
    super.setEventListeners();
  }
}
