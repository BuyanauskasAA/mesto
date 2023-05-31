const profilePopupElement = document.querySelector(".profile-popup");
const profilePopupOpenButton = document.querySelector(".profile__edit-button");
const profilePopupForm = profilePopupElement.querySelector(".popup__form");
const profilePopupName = profilePopupForm.querySelector("#input-profile-name");
const profilePopupAbout = profilePopupForm.querySelector(
  "#input-profile-about"
);

const cardPopupElement = document.querySelector(".card-popup");
const cardPopupOpenButton = document.querySelector(".profile__add-button");
const cardPopupForm = cardPopupElement.querySelector(".popup__form");

const avatarPopupElement = document.querySelector(".avatar-popup");
const avatarPopupOpenButton = document.querySelector(
  ".profile__avatar-overlay"
);
const avatarPopupForm = avatarPopupElement.querySelector(".popup__form");

export {
  profilePopupOpenButton,
  profilePopupForm,
  profilePopupName,
  profilePopupAbout,
  cardPopupOpenButton,
  cardPopupForm,
  avatarPopupOpenButton,
  avatarPopupForm,
};
