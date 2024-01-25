import "./pages/index.css";
import { cardTemplate, cardContainer, createCard, deleteCard, likeCard} from "./components/card.js";
import { initialCards } from "./components/cards.js";
import { openModal, closeModal } from "./components/modal.js";

const formElement = document.querySelector(".profile__edit-button");

const profileAddButton = document.querySelector(".profile__add-button");

const popupNewCard = document.querySelector(".popup_type_new-card");
const popupEdit = document.querySelector(".popup_type_edit");

const popupCloseEdit = document.querySelector("#popup__close-edit")
const popupCloseNewCard = document.querySelector("#popup__close_new-card")
const popupEditOverlayClose = document.querySelector("#popup__edit_overlay-close")
const popupNewCardOverlayClose = document.querySelector("#popup__new-card_overlay-close")

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__description");

const editProfileForm = document.forms["edit-profile"];
const addCardForm = document.forms["new-place"];

const InputCardName = document.querySelector(".popup__input_type_card-name")
const inputCardUrl = document.querySelector(".popup__input_type_url")

function handleFormSubmit(event) {
  event.preventDefault();
  nameInput.value = event.target.elements.name.value;
  jobInput.value = event.target.elements.description.value;
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeModal(popupEdit);
}

editProfileForm.addEventListener('submit', handleFormSubmit);

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

popupCloseNewCard.addEventListener("click", function() {
  closeModal(popupNewCard)
})

popupEditOverlayClose.addEventListener("click", function (event) {
  if (event.currentTarget === event.target) {
    closeModal(popupEdit)
  }
})

popupNewCardOverlayClose.addEventListener("click", function (event) {
  if (event.currentTarget === event.target) {
    closeModal(popupNewCard)
  }
})

function addNewCard(event) {
  event.preventDefault();
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);
  const titleInput = InputCardName.value
  const linkInput = inputCardUrl.value
  cardContent.querySelector(".card__title").textContent = titleInput;
  cardContent.querySelector(".card__image").src = linkInput;
  cardContent.querySelector(".card__delete-button").addEventListener("click", deleteCard);
  cardContent.querySelector(".card__like-button").addEventListener("click", likeCard);
  cardContainer.prepend(cardContent);
  addCardForm.reset();
  closeModal(popupNewCard);
}

addCardForm.addEventListener("submit", addNewCard);

initialCards.forEach(function(item) {
  const card = createCard(item, deleteCard);
  cardContainer.append(card);
});
