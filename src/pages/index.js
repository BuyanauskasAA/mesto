import './index.css';
import Api from '../scripts/components/Api';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import { validationConfig } from '../scripts/utils/validation-config.js';
import {
  profilePopupOpenButton,
  cardPopupOpenButton,
  avatarPopupOpenButton,
} from '../scripts/utils/constants.js';

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about',
  avatarSelector: '.profile__avatar-image',
});

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement, false);
  },
  containerSelector: '.cards__container',
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '0cc5c16f-cf48-47c9-ae08-45d646caabcf',
    'Content-Type': 'application/json',
  },
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, data]) => {
    cardList.renderItems(cards);
    userInfo.setFullUserInfo(data);
  })
  .catch(console.error);

const handleSubmit = (request, popupInstance) => {
  popupInstance.renderLoading(true);
  request()
    .then(() => {
      popupInstance.close();
    })
    .catch(console.error)
    .finally(() => {
      popupInstance.renderLoading(false);
    });
};

const createCard = (cardInfo) => {
  const card = new Card({
    cardInfo,
    templateSelector: '#card-template',
    handlers: {
      handleCardClick: () => imagePopup.open(cardInfo),
      handleCardDelete: () => {
        confirmPopup.open();
        confirmPopup.setSubmitHandler(() => {
          const makeRequest = () => {
            return api.deleteCard(card.getId()).then(() => {
              card.removeCard();
            });
          };
          handleSubmit(makeRequest, confirmPopup);
        });
      },
      handleCardLike: () => {
        if (card.isCardLiked()) {
          api
            .deleteLike(card.getId())
            .then(({ likes }) => {
              card.updateLikeCounter(likes.length);
              card.enableLike(false);
            })
            .catch(console.error);
        } else {
          api
            .putLike(card.getId())
            .then(({ likes }) => {
              card.updateLikeCounter(likes.length);
              card.enableLike(true);
            })
            .catch(console.error);
        }
      },
    },
  });

  card.enableLike(
    cardInfo.likes.some(({ _id }) => _id === userInfo.getUserId())
  );
  card.updateLikeCounter(cardInfo.likes.length);
  card.disableDeleteButton(cardInfo.owner._id !== userInfo.getUserId());

  const cardElement = card.generateCard();
  return cardElement;
};

/***** Profile Popup *****/

const profilePopup = new PopupWithForm({
  popupSelector: '.profile-popup',
  handleSumbitButton: (inputValues) => {
    const makeRequest = () => {
      return api.setUserInfo(inputValues).then((data) => {
        userInfo.setUserInfo(data);
      });
    };
    handleSubmit(makeRequest, profilePopup);
  },
});

profilePopup.setEventListeners();

profilePopupOpenButton.addEventListener('click', () => {
  profilePopup.setInputValues(userInfo.getUserInfo());
  profilePopup.open();
});

/***** Card Popup *****/

const cardPopup = new PopupWithForm({
  popupSelector: '.card-popup',
  handleSumbitButton: (inputValues) => {
    const makeRequest = () => {
      return api.addCard(inputValues).then((data) => {
        const cardElement = createCard(data);
        cardList.addItem(cardElement);
      });
    };
    handleSubmit(makeRequest, cardPopup);
  },
});

cardPopup.setEventListeners();

cardPopupOpenButton.addEventListener('click', () => {
  cardPopup.open();
});

/***** Avatar Popup *****/

const avatarPopup = new PopupWithForm({
  popupSelector: '.avatar-popup',
  handleSumbitButton: (inputValues) => {
    const makeRequest = () => {
      return api.setUserAvatar(inputValues).then(({ avatar }) => {
        userInfo.setUserAvatar(avatar);
      });
    };
    handleSubmit(makeRequest, avatarPopup);
  },
});

avatarPopup.setEventListeners();

avatarPopupOpenButton.addEventListener('click', () => {
  avatarPopup.open();
});

/***** Image Popup *****/

const imagePopup = new PopupWithImage('.image-popup');
imagePopup.setEventListeners();

/***** Confirmation Popup *****/

const confirmPopup = new PopupWithConfirmation('.confirm-popup');
confirmPopup.setEventListeners();

/***** Validation *****/

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);

formValidators['confirm-form'].enableSubmitButton();
