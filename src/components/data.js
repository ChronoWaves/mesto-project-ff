const formElement = document.querySelector(".profile__edit-button");

const profileAddButton = document.querySelector(".profile__add-button");

const popupNewCard = document.querySelector(".popup_type_new-card");
const popupEdit = document.querySelector(".popup_type_edit");

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__description");

const editProfileForm = document.forms["edit-profile"];
const addCardForm = document.forms["new-place"];
const editProfileAvatarForm = document.forms["edit-avatar"]

const InputCardName = document.querySelector(".popup__input_type_card-name")
const inputCardUrl = document.querySelector(".popup__input_type_url")

const popupCardImage = document.querySelector(".popup_type_image")

const popups = document.querySelectorAll('.popup');

const editProfileAvatar = document.querySelector(".profile__image")
const modalEditProfileAvatar = document.querySelector(".popup_type_edit-avatar")

export { formElement, profileAddButton, popupNewCard, popupEdit, nameInput, jobInput, nameProfile, jobProfile, editProfileForm, addCardForm, InputCardName, inputCardUrl, popupCardImage, popups, editProfileAvatar, modalEditProfileAvatar, editProfileAvatarForm}
