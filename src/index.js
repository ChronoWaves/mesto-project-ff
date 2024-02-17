import "./pages/index.css";
import { cardContainer, createCard, deleteCard, likeCard } from "./components/card.js";
import { initialCards } from "./components/cards.js";
import { openModal, closeModal } from "./components/modal.js";
import { formElement, profileAddButton, popupNewCard, popupEdit, nameInput, jobInput, nameProfile, jobProfile, editProfileForm, addCardForm, InputCardName, inputCardUrl, popupCardImage, popups} from "./components/data.js";
import { enableValidation, clearValidation } from "./components/validation.js";

export const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
};

function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeModal(popupEdit);
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

formElement.addEventListener("click", function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openModal(popupEdit);
});

profileAddButton.addEventListener("click", function () {
  openModal(popupNewCard);
});

popups.forEach((popup) => {
popup.addEventListener('click', (evt) => {
if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){
closeModal(popup);
}
});
});

function addNewCard(event) {
  event.preventDefault();
  const titleInput = InputCardName.value
  const linkInput = inputCardUrl.value
  const newCard = {};
  newCard.name = titleInput;
  newCard.link = linkInput;
  cardContainer.prepend(createCard(newCard, deleteCard, likeCard, openCard));
  addCardForm.reset();
  closeModal(popupNewCard);
}

addCardForm.addEventListener("submit", addNewCard);

function openCard(event) {
  const openedCardImage = event.target;
  const popupImage = document.querySelector(".popup__image")
  const popupCaption = document.querySelector(".popup__caption")
  popupImage.src = openedCardImage.src;
  popupImage.alt = openedCardImage.alt;
  popupCaption.textContent = openedCardImage.alt;
  openModal(popupCardImage)
}

initialCards.forEach(function(item) {
  const card = createCard(item, deleteCard, likeCard, openCard);
  cardContainer.append(card);
});

enableValidation(validationConfig)
