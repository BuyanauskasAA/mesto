const elbrusImage = new URL('../../images/elbrus.jpg', import.meta.url);
const kurshskayaKosaImage = new URL('../../images/kurshskaya-kosa.jpg', import.meta.url);
const ruskealaImage = new URL('../../images/ruskeala.jpg', import.meta.url);
const shihanyImage = new URL('../../images/shihany.jpg', import.meta.url);
const kezenoyamImage = new URL('../../images/kezenoyam.jpg', import.meta.url);
const thachImage = new URL('../../images/thach.jpg', import.meta.url);

const initialCards = [
  { name: 'Эльбрус', link: elbrusImage },
  { name: 'Куршская коса', link: kurshskayaKosaImage },
  { name: 'Рускеала', link: ruskealaImage },
  { name: 'Шиханы', link: shihanyImage },
  { name: 'Кезенойам', link: kezenoyamImage },
  { name: 'Большой Тxач', link: thachImage }
];

const profilePopupElement = document.querySelector('.profile-popup');
const profilePopupOpenButton = document.querySelector('.profile__edit-button');
const profilePopupForm = profilePopupElement.querySelector('.popup__form');
const profilePopupName = profilePopupForm.querySelector('#input-profile-name');
const profilePopupAbout = profilePopupForm.querySelector('#input-profile-about');

const cardPopupElement = document.querySelector('.card-popup');
const cardPopupOpenButton = document.querySelector('.profile__add-button');
const cardPopupForm = cardPopupElement.querySelector('.popup__form');

export {
  initialCards,
  profilePopupOpenButton,
  profilePopupForm,
  profilePopupName,
  profilePopupAbout,
  cardPopupOpenButton,
  cardPopupForm
};
