import { Card } from "./card.js";
import { initialCards } from "./constants.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./validation-config.js";

const profilePopup = document.querySelector('.profile-popup');
const profilePopupOpenButton = document.querySelector('.profile__edit-button');
const profilePopupCloseButton = profilePopup.querySelector('.popup__close-button');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const profilePopupNameInput = profilePopupForm.querySelector('#input-profile-name');
const profilePopupAboutInput = profilePopupForm.querySelector('#input-profile-about');
const profilePopupSubmitButton = profilePopupForm.querySelector('.popup__submit-button');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const cardPopup = document.querySelector('.card-popup');
const cardPopupOpenButton = document.querySelector('.profile__add-button');
const cardPopupCloseButton = cardPopup.querySelector('.popup__close-button');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const cardPopupTitleInput = cardPopupForm.querySelector('#input-card-title');
const cardPopupLinkInput = cardPopupForm.querySelector('#input-card-link');

const cardsContainer = document.querySelector('.cards__container');

const imagePopup = document.querySelector('.image-popup');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscapeKey);
  popupElement.addEventListener('click', closePopupByClickOnOverlay);
}

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscapeKey);
  popupElement.removeEventListener('click', closePopupByClickOnOverlay);
}

const closePopupByClickOnOverlay = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

const closePopupByEscapeKey = (event) => {
  if (event.key === 'Escape') {
    const popups = Array.from(document.querySelectorAll('.popup'));
    const [openedPopup] = popups.filter((popup) => popup.classList.contains('popup_opened'));
    closePopup(openedPopup);
  }
}

const addCard = (cardElement, isInitialCard = true) => {
  if (isInitialCard) {
    cardsContainer.append(cardElement);
  } else {
    cardsContainer.prepend(cardElement);
  }
}

const handleSubmitProfileForm = (event) => {
  event.preventDefault();
  profileName.textContent = profilePopupNameInput.value;
  profileAbout.textContent = profilePopupAboutInput.value;
  closePopup(profilePopup);
}

const handleSubmitCardForm = (event) => {
  event.preventDefault();
  const cardInfo = { name: cardPopupTitleInput.value, link: cardPopupLinkInput.value };
  const card = new Card(cardInfo, '#card-template');
  const cardElement = card.generateCard();
  addCard(cardElement, false);
  closePopup(cardPopup);
  cardPopupForm.reset();
}

initialCards.forEach((intialCard) => {
  const card = new Card(intialCard, '#card-template');
  const cardElement = card.generateCard();
  addCard(cardElement);
});

profilePopupOpenButton.addEventListener('click', () => {
  profilePopupNameInput.value = profileName.textContent;
  profilePopupAboutInput.value = profileAbout.textContent;
  openPopup(profilePopup);
});
profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));
profilePopupForm.addEventListener('submit', handleSubmitProfileForm);
const profileFormValidator = new FormValidator(validationConfig, profilePopupForm);
profileFormValidator.enableValidation();
profileFormValidator.enableSubmitButton(profilePopupSubmitButton);

cardPopupOpenButton.addEventListener('click', () => openPopup(cardPopup));
cardPopupCloseButton.addEventListener('click', () => closePopup(cardPopup));
cardPopupForm.addEventListener('submit', handleSubmitCardForm);
const cardFormValidator = new FormValidator(validationConfig, cardPopupForm);
cardFormValidator.enableValidation();

cardsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('card__image')) {
    openPopup(imagePopup);
  }
});

imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));
