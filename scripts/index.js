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

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__about');

const popupFormElement = popupElement.querySelector('.popup__form');
const popupInputNameElement = popupElement.querySelector('.popup__input_type_name');
const popupInputAboutElement = popupElement.querySelector('.popup__input_type_about');

const cardTemplate = document.querySelector('#element-template').content;
const cardsContainer = document.querySelector('.elements__container');

const renderCard = function (card) {
  const title = card.name;
  const link = card.link;
  const cardElement = cardTemplate.cloneNode(true);

  console.log(cardElement);

  cardElement.querySelector('.element__title').textContent = title;
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__image').alt = title;

  cardsContainer.append(cardElement);
}

initialCards.forEach(renderCard);

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
