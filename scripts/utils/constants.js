const initialCards = [
  {
    name: 'Эльбрус',
    link: './images/elbrus.jpg'
  },
  {
    name: 'Куршская коса',
    link: './images/kurshskaya-kosa.jpg'
  },
  {
    name: 'Рускеала',
    link: './images/ruskeala.jpg'
  },
  {
    name: 'Шиханы',
    link: './images/shihany.jpg'
  },
  {
    name: 'Кезенойам',
    link: './images/kezenoyam.jpg'
  },
  {
    name: 'Большой Тxач',
    link: './images/thach.jpg'
  }
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
