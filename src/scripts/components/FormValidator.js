export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;

    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig._inputErrorClass;
    this._errorClass = validationConfig.errorClass;

    this._formButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._formInputs = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
  }

  _hasInvalidInput() {
    return this._formInputs.some((input) => !input.checkValidity());
  }

  _showInputError(input) {
    const currentInputErrorContainer = document.querySelector(
      `.${input.id}-error`
    );
    currentInputErrorContainer.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
    currentInputErrorContainer.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const currentInputErrorContainer = document.querySelector(
      `.${input.id}-error`
    );
    currentInputErrorContainer.textContent = '';
    input.classList.remove(this._inputErrorClass);
    currentInputErrorContainer.classList.remove(this._errorClass);
  }

  _checkInputValidity(input) {
    if (!input.checkValidity()) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _setEventListeners() {
    this.disableSubmitButton();
    this._formElement.addEventListener('reset', () => {
      this.disableSubmitButton();
    });
    this._formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        if (this._hasInvalidInput()) {
          this.disableSubmitButton();
        } else {
          this.enableSubmitButton();
        }
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }

  enableSubmitButton() {
    this._formButton.classList.remove(this._inactiveButtonClass);
    this._formButton.removeAttribute('disabled');
  }

  disableSubmitButton() {
    this._formButton.classList.add(this._inactiveButtonClass);
    this._formButton.setAttribute('disabled', true);
  }
}
