const formElement = document.querySelector(".profile__edit-button");

const profileAddButton = document.querySelector(".profile__add-button");

const popupNewCard = document.querySelector(".popup_type_new-card");
const popupEdit = document.querySelector(".popup_type_edit");

const popupCloseEdit = document.querySelector("#popup__close-edit")
const popupCloseNewCard = document.querySelector("#popup__close_new-card")
const popupEditOverlayClose = document.querySelector("#popup__edit_overlay-close")
const popupNewCardOverlayClose = document.querySelector("#popup__new-card_overlay-close")
const popupImageOverlayClose = document.querySelector("#popup__image_overlay-close")
const popupCloseImage = document.querySelector("#popup__close-image")

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__description");

const editProfileForm = document.forms["edit-profile"];
const addCardForm = document.forms["new-place"];

const InputCardName = document.querySelector(".popup__input_type_card-name")
const inputCardUrl = document.querySelector(".popup__input_type_url")

const popupCardImage = document.querySelector(".popup_type_image")

export { formElement, profileAddButton, popupNewCard, popupEdit, popupCloseEdit, popupCloseNewCard, popupEditOverlayClose, popupNewCardOverlayClose, nameInput, jobInput, nameProfile, jobProfile, editProfileForm, addCardForm, InputCardName, inputCardUrl, popupCardImage, popupCloseImage, popupImageOverlayClose }
