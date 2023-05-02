export class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig._inputErrorClass;
    this._errorClass = validationConfig.errorClass;
  }

  _disableSubmitButton(formButton) {
    formButton.classList.add(this._inactiveButtonClass);
    formButton.setAttribute('disabled', true);
  }

  enableSubmitButton(formButton) {
    formButton.classList.remove(this._inactiveButtonClass);
    formButton.removeAttribute('disabled');
  }

  _hasInvalidInput(formInputs) {
    return formInputs.some((input) => !input.checkValidity());
  }

  _showInputError(input) {
    const currentInputErrorContainer = document.querySelector(`.${input.id}-error`);
    currentInputErrorContainer.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
    currentInputErrorContainer.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const currentInputErrorContainer = document.querySelector(`.${input.id}-error`);
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
    const formInputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const formButton = this._formElement.querySelector(this._submitButtonSelector);
    this._disableSubmitButton(formButton);
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        if (this._hasInvalidInput(formInputs)) {
          this._disableSubmitButton(formButton);
        } else {
          this.enableSubmitButton(formButton);
        }
      })
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    })
    this._setEventListeners();
  }
}
