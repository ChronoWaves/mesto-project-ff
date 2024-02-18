import "./pages/index.css";
import { createCard, removeCard, likeCard} from "./components/card.js"
import { openModal, closeModal} from "./components/modal.js"
import { enableValidation, clearValidation } from "./components/validation.js";
import { getInitialCards, getUserData, editUserData, editUserImage, creatureCard } from "./components/api.js"
import { buttonOpenEditProfileForm, editModal, buttonCloseEditProfileForm, formEditProfile, editInputName, editInputDescription, profileTitle, profileDescription, editModalSaveButton, avatarModal, profileImage,
  avatarForm, avatarInput, buttonCloseUpdateAvatarForm, avatarModalSaveButton, addModal, buttonOpenAddCardForm, formAddCard, addInputName, addInputUrl, addModalSaveButton, buttonCloseAddCardForm, imageModal,
  imageButtonClose, imageCard, imageCaption, placesList } from "./components/data.js"

let userId;

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
};

buttonOpenEditProfileForm.addEventListener('click', function() {
	openModal(editModal);
	editInputName.value = profileTitle.textContent;
	editInputDescription.value = profileDescription.textContent;
	clearValidation(formEditProfile, validationConfig);
});

buttonCloseEditProfileForm.addEventListener('click', function() {
	closeModal(editModal);
});

function editFormSubmit(event) {
	event.preventDefault();
	editModalSaveButton.textContent = 'Сохранение...';
	editUserData(editInputName.value, editInputDescription.value)
	.then((data) => {
		profileTitle.textContent = data.name;
		profileDescription.textContent = data.about;
		closeModal(editModal);
	})
  .catch((error) => {
		console.log(error);
	})
	.finally(() => {
		editModalSaveButton.textContent = 'Сохранение';
	})
}

formEditProfile.addEventListener('submit', editFormSubmit);

profileImage.addEventListener('click', () => {
	avatarForm.reset();
	openModal(avatarModal);
	clearValidation(avatarForm, validationConfig);
})

buttonCloseUpdateAvatarForm.addEventListener('click', () => {
	closeModal(avatarModal);
})

function avatarFormSubmit(event) {
	event.preventDefault();
	avatarModalSaveButton.textContent = 'Сохранение...';
	editUserImage(avatarInput.value)
	.then((data) => {
		profileImage.style.backgroundImage = `url(${data.avatar})`;
		closeModal(avatarModal)
	})
  .catch((error) => {
		console.log(error);
	})
	.finally(() => {
		avatarModalSaveButton.textContent = 'Сохранение';
	})
}

function addFormSubmit(event) {
	event.preventDefault();
	addModalSaveButton.textContent = 'Сохранение...';
	creatureCard(addInputName.value, addInputUrl.value)
	.then((cardValue) => {
		placesList.prepend(createCard(cardValue, userId, removeCard, likeCard, openImage));
		formAddCard.reset();
		closeModal(addModal);
	})
  .catch((error) => {
		console.log(error);
	})
	.finally(() => {
		addModalSaveButton.textContent = 'Сохранить';
	})
}

avatarForm.addEventListener('submit', avatarFormSubmit);

buttonOpenAddCardForm.addEventListener('click', function() {
	formAddCard.reset();
	openModal(addModal);
	clearValidation(formAddCard, validationConfig);
});

buttonCloseAddCardForm.addEventListener('click', function() {
	closeModal(addModal);
});

formAddCard.addEventListener('submit', addFormSubmit);

function openImage(cardValue) {
	imageCaption.textContent = cardValue.name;
	imageCard.alt = cardValue.name;
	imageCard.src = cardValue.link;
	openModal(imageModal);
}

imageButtonClose.addEventListener('click', function() {
	closeModal(imageModal);
})

Promise.all([getInitialCards(), getUserData()])
.then(([initialCardsData, userData]) => {
  userId = userData._id;
  initialCardsData.forEach((cardValue) => {
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.style = `background-image: url('${userData.avatar}')`;
    placesList.append(createCard(cardValue, userId, removeCard, likeCard, openImage));
  });
})
.catch((error) => {
  console.log(error);
});

enableValidation(validationConfig);
