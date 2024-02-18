import "./pages/index.css";
import { createCard, removeCard, likeCard} from "./components/card.js"
import { openModal, closeModal} from "./components/modal.js"
import { enableValidation, clearValidation } from "./components/validation.js";
import { getInitialCards, getUserData, editUserData, editUserImage, card } from "./components/api.js"
import { editButtonOpen, editModal, editButtonClose, editForm, editInputName, editInputDescription, profileTitle, profileDescription, editModalSaveButton, avatarModal, profileImage,
  avatarForm, avatarInput, avatarCloseButton, avatarModalSaveButton, addModal, addButtonOpen, addForm, addInputName, addInputUrl, addModalSaveButton, addButtonClose, imageModal,
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

editButtonOpen.addEventListener('click', function() {
	openModal(editModal);
	editInputName.value = profileTitle.textContent;
	editInputDescription.value = profileDescription.textContent;
	clearValidation(editForm, validationConfig);
});

editButtonClose.addEventListener('click', function() {
	closeModal(editModal);
});

function editFormSubmit(event) {
	event.preventDefault();
	editModalSaveButton.textContent = 'Сохранение...';
	editUserData(editInputName.value, editInputDescription.value)
	.then((data) => {
		profileTitle.textContent = data.name;
		profileDescription.textContent = data.description;
		closeModal(editModal);
	})
	.finally(() => {
		editModalSaveButton.textContent = 'Сохранение';
	})
}

editForm.addEventListener('submit', editFormSubmit);

profileImage.addEventListener('click', () => {
	avatarForm.reset();
	openModal(avatarModal);
	clearValidation(avatarForm, validationConfig);
})

avatarCloseButton.addEventListener('click', () => {
	closeModal(avatarModal);
})

function avatarFormSubmit(event) {
	event.preventDefault();
	avatarModalSaveButton.textContent = 'Сохранение...';

	editUserImage(avatarInput.value)
	.then((data) => {
		profileImage.style.backgroundImage = `url(${data.link})`;
		closeModal(avatarModal)
	})
	.finally(() => {
		avatarModalSaveButton.textContent = 'Сохранение';
	})
}

avatarForm.addEventListener('submit', avatarFormSubmit);

addButtonOpen.addEventListener('click', function() {
	addForm.reset();
	openModal(addModal);
	clearValidation(addForm, validationConfig);
});

addButtonClose.addEventListener('click', function() {
	closeModal(addModal);
});

function addFormSubmit(event) {
	event.preventDefault();
	addModalSaveButton.textContent = 'Сохранение...';

	card(addInputName.value, addInputUrl.value)
	.then((cardValue) => {
		placesList.prepend(createCard(cardValue, userId, removeCard, likeCard, openImage));
		addForm.reset();
		closeModal(addModal);
	})
	.finally(() => {
		addModalSaveButton.textContent = 'Сохранить';
	})
}

addForm.addEventListener('submit', addFormSubmit);

function openImage(cardValue) {
	imageCaption.textContent = cardValue.name;
	imageCard.alt = cardValue.name;
	imageCard.src = cardValue.link;
	openModal(imageModal);
}

imageButtonClose.addEventListener('click', function() {
	closeModal(imageModal);
})

enableValidation(validationConfig);

Promise.all([getInitialCards(), getUserData()])
.then(([initialCardsData, userData]) => {
	userId = userData._id;
	profileTitle.textContent = userData.name;
	profileDescription.textContent = userData.about;
	profileImage.style = `background-image: url('${userData.avatar}')`

	initialCardsData.forEach((cardValue) => {
		placesList.append(createCard(cardValue, userId, removeCard, likeCard, openImage));
	})
})
