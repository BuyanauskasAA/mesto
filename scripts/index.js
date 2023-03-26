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

const profilePopup = document.querySelector('.profile-popup');
const profilePopupOpenButton = document.querySelector('.profile__edit-button');
const profilePopupCloseButton = profilePopup.querySelector('.popup__close-button');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const profilePopupNameInput = profilePopupForm.querySelector('.popup__input_type_profile-name');
const profilePopupAboutInput = profilePopupForm.querySelector('.popup__input_type_profile-about');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const cardPopup = document.querySelector('.card-popup');
const cardPopupOpenButton = document.querySelector('.profile__add-button');
const cardPopupCloseButton = cardPopup.querySelector('.popup__close-button');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const cardTitle = cardPopupForm.querySelector('.popup__input_type_card-title');
const cardLink = cardPopupForm.querySelector('.popup__input_type_card-link');

const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.cards__container');

const imagePopup = document.querySelector('.image-popup');
const imagePopupImage = imagePopup.querySelector('.image-popup__image');
const imagePopupCaption = imagePopup.querySelector('.image-popup__caption');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
}

const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

const renderCard = function (title, link) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = title;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = title;

  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_active');
  });

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    card.remove();
  });

  const imageElement = cardElement.querySelector('.card__image');
  imageElement.addEventListener('click', () => {
    imagePopupImage.src = link;
    imagePopupImage.alt = title;
    imagePopupCaption.textContent = title;
    openPopup(imagePopup);
  });

  cardsContainer.append(cardElement);
}

const handleSubmitProfileForm = function (event) {
  event.preventDefault();
  console.log(event);
  profileName.textContent = profilePopupNameInput.value;
  profileAbout.textContent = profilePopupAboutInput.value;
  closePopup(profilePopup);
}

const handleSubmitCardForm = function (event) {
  event.preventDefault();
  renderCard(cardTitle.value, cardLink.value);
  closePopup(cardPopup);
  cardPopupForm.reset();
}

initialCards.forEach((card) => renderCard(card.name, card.link));

profilePopupOpenButton.addEventListener('click', () => {
  profilePopupNameInput.value = profileName.textContent;
  profilePopupAboutInput.value = profileAbout.textContent;
  openPopup(profilePopup);
});
profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));
profilePopup.addEventListener('click', closePopupByClickOnOverlay);
profilePopupForm.addEventListener('submit', handleSubmitProfileForm);

cardPopupOpenButton.addEventListener('click', () => openPopup(cardPopup));
cardPopupCloseButton.addEventListener('click', () => closePopup(cardPopup));
cardPopup.addEventListener('click', closePopupByClickOnOverlay);
cardPopup.addEventListener('submit', handleSubmitCardForm);

imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));
imagePopup.addEventListener('click', closePopupByClickOnOverlay);
