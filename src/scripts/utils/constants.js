const elbrusImage = new URL("../../images/elbrus.jpg", import.meta.url);
const kurshskayaKosaImage = new URL(
  "../../images/kurshskaya-kosa.jpg",
  import.meta.url
);
const ruskealaImage = new URL("../../images/ruskeala.jpg", import.meta.url);
const shihanyImage = new URL("../../images/shihany.jpg", import.meta.url);
const kezenoyamImage = new URL("../../images/kezenoyam.jpg", import.meta.url);
const thachImage = new URL("../../images/thach.jpg", import.meta.url);

const initialCards = [
  { name: "Эльбрус", link: elbrusImage },
  { name: "Куршская коса", link: kurshskayaKosaImage },
  { name: "Рускеала", link: ruskealaImage },
  { name: "Шиханы", link: shihanyImage },
  { name: "Кезенойам", link: kezenoyamImage },
  { name: "Большой Тxач", link: thachImage },
];

const profilePopupElement = document.querySelector(".profile-popup");
const profilePopupOpenButton = document.querySelector(".profile__edit-button");
const profilePopupForm = profilePopupElement.querySelector(".popup__form");
const profilePopupName = profilePopupForm.querySelector("#input-profile-name");
const profilePopupAbout = profilePopupForm.querySelector(
  "#input-profile-about"
);
const profilePopupSubmitButton = profilePopupForm.querySelector(
  ".popup__submit-button"
);

const cardPopupElement = document.querySelector(".card-popup");
const cardPopupOpenButton = document.querySelector(".profile__add-button");
const cardPopupForm = cardPopupElement.querySelector(".popup__form");
const cardPopupSubmitButton = cardPopupForm.querySelector(
  ".popup__submit-button"
);

const avatarPopupElement = document.querySelector(".avatar-popup");
const avatarPopupOpenButton = document.querySelector(
  ".profile__avatar-overlay"
);
const avatarPopupForm = avatarPopupElement.querySelector(".popup__form");
const avatarPopupSubmitButton = avatarPopupForm.querySelector(
  ".popup__submit-button"
);

const confirmPopupElement = document.querySelector(".confirm-popup");
const confirmPopupSubmitButton = confirmPopupElement.querySelector(
  ".popup__submit-button"
);

export {
  profilePopupOpenButton,
  profilePopupSubmitButton,
  profilePopupForm,
  profilePopupName,
  profilePopupAbout,
  cardPopupOpenButton,
  cardPopupSubmitButton,
  cardPopupForm,
  avatarPopupOpenButton,
  avatarPopupSubmitButton,
  avatarPopupForm,
  confirmPopupSubmitButton,
};
