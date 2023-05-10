import './index.css';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { validationConfig } from "../scripts/utils/validation-config.js";
import {
  initialCards,
  profilePopupOpenButton,
  profilePopupForm,
  profilePopupName,
  profilePopupAbout,
  cardPopupOpenButton,
  cardPopupForm,
} from "../scripts/utils/constants.js";

const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__about' });

const profilePopup = new PopupWithForm({
  popupSelector: '.profile-popup',
  handleSumbitButton: ({ name, about }) => {
    userInfo.setUserInfo(name, about);
    profilePopup.close();
  }
});

profilePopup.setEventListeners();

profilePopupOpenButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  profilePopupName.value = name;
  profilePopupAbout.value = about;
  profileFormValidator.enableSubmitButton();
  profilePopup.open();
});

const profileFormValidator = new FormValidator(validationConfig, profilePopupForm);
profileFormValidator.enableValidation();

const cardPopup = new PopupWithForm({
  popupSelector: '.card-popup',
  handleSumbitButton: (item) => {
    const card = new Card(item, '#card-template', () => imagePopup.open(item));
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    cardPopup.close();
  }
});

cardPopup.setEventListeners();

cardPopupOpenButton.addEventListener('click', () => {
  cardPopup.open();
});

const cardFormValidator = new FormValidator(validationConfig, cardPopupForm);
cardFormValidator.enableValidation();

const imagePopup = new PopupWithImage('.image-popup');
imagePopup.setEventListeners();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template', () => imagePopup.open(item));
    const cardElement = card.generateCard();
    cardList.addItem(cardElement, false);
  }
}, '.cards__container');

cardList.renderItems();
