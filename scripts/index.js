import { Card } from "./card.js";
import { initialCards } from "./constants.js";
import { FormValidator } from "./FormValidator.js";
import { validationConfig } from "./validation-config.js";

const profilePopup = document.querySelector('.profile-popup');
const profilePopupOpenButton = document.querySelector('.profile__edit-button');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const profilePopupNameInput = profilePopupForm.querySelector('#input-profile-name');
const profilePopupAboutInput = profilePopupForm.querySelector('#input-profile-about');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const cardPopup = document.querySelector('.card-popup');
const cardPopupOpenButton = document.querySelector('.profile__add-button');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const cardPopupTitleInput = cardPopupForm.querySelector('#input-card-title');
const cardPopupLinkInput = cardPopupForm.querySelector('#input-card-link');

const cardsContainer = document.querySelector('.cards__container');

const imagePopup = document.querySelector('.image-popup');
const imagePopupImage = imagePopup.querySelector('.image-popup__image');
const imagePopupCaption = imagePopup.querySelector('.image-popup__caption');

const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
}

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
}

const closePopupByEscapeKey = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const hadlePopupOpenButton = (popupOpenButton, popupElement) => {
  popupOpenButton.addEventListener('click', () => {
    document.addEventListener('keydown', closePopupByEscapeKey);
    popupElement.addEventListener('click', (event) => {
      const popupClassList = event.target.classList;
      if (popupClassList.contains('popup') || popupClassList.contains('popup__close-button')) {
        document.removeEventListener('keydown', closePopupByEscapeKey);
        closePopup(popupElement);
      }
    });
    openPopup(popupElement);
  });
}

const addCard = (cardElement, isInitialCard = true) => {
  if (isInitialCard) {
    cardsContainer.append(cardElement);
  } else {
    cardsContainer.prepend(cardElement);
  }
}

const createCard = (cardInfo) => {
  const popupData = {
    hadlePopupOpenButton,
    popup: imagePopup,
    popupImage: imagePopupImage,
    popupCaption: imagePopupCaption,
  };
  const card = new Card(cardInfo, '#card-template', popupData);
  const cardElement = card.generateCard();
  return cardElement;
}

const handleSubmitProfileForm = (event) => {
  event.preventDefault();
  profileName.textContent = profilePopupNameInput.value;
  profileAbout.textContent = profilePopupAboutInput.value;
  document.removeEventListener('keydown', closePopupByEscapeKey);
  closePopup(profilePopup);
}

const handleSubmitCardForm = (event) => {
  event.preventDefault();
  const cardInfo = { name: cardPopupTitleInput.value, link: cardPopupLinkInput.value };
  const card = createCard(cardInfo);
  addCard(card, false);
  document.removeEventListener('keydown', closePopupByEscapeKey);
  closePopup(cardPopup);
  cardPopupForm.reset();
}

const validateForm = (formElement, isSubmitButtonActive = false) => {
  const formValidator = new FormValidator(validationConfig, formElement);
  formValidator.enableValidation();
  if (isSubmitButtonActive) {
    formValidator.enableSubmitButton();
  }
}

initialCards.forEach((intialCard) => {
  const card = createCard(intialCard);
  addCard(card);
});

profilePopupOpenButton.addEventListener('click', () => {
  profilePopupNameInput.value = profileName.textContent;
  profilePopupAboutInput.value = profileAbout.textContent;
});
profilePopupForm.addEventListener('submit', handleSubmitProfileForm);
hadlePopupOpenButton(profilePopupOpenButton, profilePopup);
validateForm(profilePopupForm, true);

cardPopupForm.addEventListener('submit', handleSubmitCardForm);
hadlePopupOpenButton(cardPopupOpenButton, cardPopup);
validateForm(cardPopupForm);
