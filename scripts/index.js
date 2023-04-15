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

const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.cards__container');

const imagePopup = document.querySelector('.image-popup');
const imagePopupImage = imagePopup.querySelector('.image-popup__image');
const imagePopupCaption = imagePopup.querySelector('.image-popup__caption');
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

const createCard = (cardInfo) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElemetTitle = cardElement.querySelector('.card__title');
  const cardElemetLink = cardElement.querySelector('.card__image');
  cardElemetTitle.textContent = cardInfo.title;
  cardElemetLink.src = cardInfo.link;
  cardElemetLink.alt = cardInfo.title;

  const imageElement = cardElement.querySelector('.card__image');
  imageElement.addEventListener('click', () => {
    imagePopupImage.src = cardInfo.link;
    imagePopupImage.alt = cardInfo.title;
    imagePopupCaption.textContent = cardInfo.title;
    openPopup(imagePopup);
  });

  return cardElement;
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
  const cardInfo = { title: cardPopupTitleInput.value, link: cardPopupLinkInput.value };
  const card = createCard(cardInfo);
  addCard(card, false);
  closePopup(cardPopup);
  cardPopupForm.reset();
}

initialCards.forEach((intialCard) => {
  const cardInfo = { title: intialCard.name, link: intialCard.link };
  const card = createCard(cardInfo);
  addCard(card);
});

cardsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('card__like-button')) {
    event.target.classList.toggle('card__like-button_active');
  }
  if (event.target.classList.contains('card__delete-button')) {
    event.target.closest('.card').remove();
  }
})

profilePopupOpenButton.addEventListener('click', () => {
  profilePopupNameInput.value = profileName.textContent;
  profilePopupAboutInput.value = profileAbout.textContent;
  enableButton(profilePopupSubmitButton, validationConfig);
  openPopup(profilePopup);
});
profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));
profilePopupForm.addEventListener('submit', handleSubmitProfileForm);

cardPopupOpenButton.addEventListener('click', () => openPopup(cardPopup));
cardPopupCloseButton.addEventListener('click', () => closePopup(cardPopup));
cardPopupForm.addEventListener('submit', handleSubmitCardForm);

imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));
