const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    })
    setEventListeners(form, rest);
  })
}

const setEventListeners = (formToValidate, { inputSelector, submitButtonSelector, ...rest }) => {
  const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
  const formButton = formToValidate.querySelector(submitButtonSelector);
  disableButton(formButton, rest);
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(input, rest);
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest);
      } else {
        enableButton(formButton, rest);
      }
    })
  })
}

const checkInputValidity = (input, { inputErrorClass, errorClass }) => {
  if (!input.checkValidity()) {
    showInputError(input, inputErrorClass, errorClass);
  } else {
    hideInputError(input, inputErrorClass, errorClass);
  }
}

const showInputError = (input, inputErrorClass, errorClass) => {
  const currentInputErrorContainer = document.querySelector(`.${input.id}-error`);
  currentInputErrorContainer.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
  currentInputErrorContainer.classList.add(errorClass);
}

const hideInputError = (input, inputErrorClass, errorClass) => {
  const currentInputErrorContainer = document.querySelector(`.${input.id}-error`);
  currentInputErrorContainer.textContent = '';
  input.classList.remove(inputErrorClass);
  currentInputErrorContainer.classList.remove(errorClass);
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some((input) => !input.checkValidity());
}

const enableButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled');
}

const disableButton = (button, { inactiveButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true);
}

enableValidation(validationConfig);
