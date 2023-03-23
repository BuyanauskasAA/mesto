const popupElement = document.querySelector('.popup');
const popupCloseButton = popupElement.querySelector('.popup__close-button');
const popupOpenButton = document.querySelector('.profile__edit-button');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popupForm = popupElement.querySelector('.popup__container');
const popupInputName = popupElement.querySelector('.popup__input_type_name');
const popupInputAbout = popupElement.querySelector('.popup__input_type_about');

const openPopup = function () {
  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileAbout.textContent;
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
  profileAbout.textContent = popupInputAbout.value;
  closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
popupForm.addEventListener('submit', savePopupData);
