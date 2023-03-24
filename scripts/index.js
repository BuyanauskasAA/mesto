const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__about');

const popupFormElement = popupElement.querySelector('.popup__form');
const popupInputNameElement = popupElement.querySelector('.popup__input_type_name');
const popupInputAboutElement = popupElement.querySelector('.popup__input_type_about');

const openPopup = function () {
  popupInputNameElement.value = profileNameElement.textContent;
  popupInputAboutElement.value = profileAboutElement.textContent;
  popupElement.classList.add('popup_opened');
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

const savePopupData = function (event) {
  event.preventDefault();
  profileNameElement.textContent = popupInputNameElement.value;
  profileAboutElement.textContent = popupInputAboutElement.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
popupFormElement.addEventListener('submit', savePopupData);
