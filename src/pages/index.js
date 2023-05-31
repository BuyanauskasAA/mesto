import "./index.css";
import Api from "../scripts/components/Api";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { validationConfig } from "../scripts/utils/validation-config.js";
import {
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
} from "../scripts/utils/constants.js";

const createCard = (item) => {
  const userId = userInfo.getUserId();
  const card = new Card({
    cardInfo: item,
    handlers: {
      handleCardClick: () => imagePopup.open(item),
      handleCardDelete: (cardId, deleteButton) => {
        const confirmPopup = new PopupWithForm({
          popupSelector: ".confirm-popup",
          handleSumbitButton: () => {
            confirmPopup.renderLoading(true, "Удаление...");
            api
              .deleteCard(cardId)
              .catch((err) => {
                console.log(err);
              })
              .finally(() => {
                confirmPopup.close();
                deleteButton.closest(".card").remove();
                confirmPopup.renderLoading(false);
              });
          },
        });
        confirmPopup.setEventListeners();
        confirmPopup.open();
      },
      handleCardLike: (cardId, isLiked, likeCounter) => {
        if (isLiked) {
          api
            .putLike(cardId)
            .then((item) => {
              likeCounter.textContent = item.likes.length;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .deleteLike(cardId)
            .then((item) => {
              likeCounter.textContent = item.likes.length;
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    },
    ifDeleteButtonDisabled: item.owner._id !== userId,
    isLiked: item.likes.some(({ _id }) => userId === _id),
    templateSelector: "#card-template",
  });

  const cardElement = card.generateCard();
  return cardElement;
};

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
  avatarSelector: ".profile__avatar-image",
});

const profilePopup = new PopupWithForm({
  popupSelector: ".profile-popup",
  handleSumbitButton: ({ name, about }) => {
    profilePopup.renderLoading(true);
    api
      .setUserInfo({ name, about })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profilePopup.renderLoading(false);
        userInfo.setUserInfo(name, about);
        profilePopup.close();
      });
  },
});

profilePopup.setEventListeners();

profilePopupOpenButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  profilePopupName.value = name;
  profilePopupAbout.value = about;
  profileFormValidator.enableSubmitButton();
  profilePopup.open();
});

const profileFormValidator = new FormValidator(
  validationConfig,
  profilePopupForm
);
profileFormValidator.enableValidation();

const cardPopup = new PopupWithForm({
  popupSelector: ".card-popup",
  handleSumbitButton: (item) => {
    cardPopup.renderLoading(true);
    api
      .addCard(item)
      .then((cardInfo) => {
        const cardElement = createCard(cardInfo);
        const newCard = new Section({}, ".cards__container");
        newCard.addItem(cardElement);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        cardPopup.renderLoading(false);
        cardPopup.close();
      });
  },
});

cardPopup.setEventListeners();

cardPopupOpenButton.addEventListener("click", () => {
  cardPopup.open();
});

const cardFormValidator = new FormValidator(validationConfig, cardPopupForm);
cardFormValidator.enableValidation();

const avatarPopup = new PopupWithForm({
  popupSelector: ".avatar-popup",
  handleSumbitButton: ({ link }) => {
    avatarPopup.renderLoading(true);
    api
      .setUserAvatar({ avatar: link })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarPopup.renderLoading(false);
        userInfo.setUserAvatar(link);
        avatarPopup.close();
      });
  },
});

avatarPopup.setEventListeners();

avatarPopupOpenButton.addEventListener("click", () => {
  avatarPopup.open();
});

const avatarFormValidator = new FormValidator(
  validationConfig,
  avatarPopupForm
);
avatarFormValidator.enableValidation();

const imagePopup = new PopupWithImage(".image-popup");
imagePopup.setEventListeners();

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "0cc5c16f-cf48-47c9-ae08-45d646caabcf",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((initialCards) => {
    const cardList = new Section(
      {
        items: initialCards,
        renderer: (item) => {
          const cardElement = createCard(item);
          cardList.addItem(cardElement, false);
        },
      },
      ".cards__container"
    );

    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

api
  .getUserInfo()
  .then(({ name, about, avatar, _id }) => {
    userInfo.setUserInfo(name, about);
    userInfo.setUserAvatar(avatar);
    userInfo.setUserId(_id);
  })
  .catch((err) => {
    console.log(err);
  });
