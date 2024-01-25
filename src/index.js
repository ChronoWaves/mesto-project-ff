import "./pages/index.css";
import { cardContainer, createCard, deleteCard, likeCard } from "./components/card.js";
import { initialCards } from "./components/cards.js";
import { openModal, closeModal } from "./components/modal.js";
import { formElement, profileAddButton, popupNewCard, popupEdit, popupCloseEdit, popupCloseNewCard, popupEditOverlayClose, popupNewCardOverlayClose, nameInput, jobInput, nameProfile, jobProfile, editProfileForm, addCardForm, InputCardName, inputCardUrl, popupCardImage, popupCloseImage, popupImageOverlayClose } from "./components/data.js";

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

popupCloseEdit.addEventListener("click", function() {
  closeModal(popupEdit)
})

popupCloseImage.addEventListener("click", function() {
  closeModal(popupCardImage)
})

popupCloseNewCard.addEventListener("click", function() {
  closeModal(popupNewCard)
})

popupEditOverlayClose.addEventListener("click", function (event) {
  if (event.currentTarget === event.target) {
    closeModal(popupEdit)
  }
})

popupImageOverlayClose.addEventListener("click", function (event) {
  if (event.currentTarget === event.target) {
    closeModal(popupCardImage)
  }
})

popupNewCardOverlayClose.addEventListener("click", function (event) {
  if (event.currentTarget === event.target) {
    closeModal(popupNewCard)
  }
})

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
