const popupElement = document.querySelector('.popup');
const popupCloseButton = popupElement.querySelector('.popup__close-button');
const popupOpenButton = document.querySelector('.profile__edit-button');

const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

const popupForm = popupElement.querySelector('.popup__container');
const popupInputName = popupElement.querySelector('.popup__input_type_name');
const popupInputProfession = popupElement.querySelector('.popup__input_type_profession');

const openPopup = function () {
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
  popupElement.classList.add('popup_is-opened');
}

const closePopup = function () {
  popupElement.classList.remove('popup_is-opened');
}

const closePopupByClickOnOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

const savePopupData = function (event) {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
popupForm.addEventListener('submit', savePopupData);
