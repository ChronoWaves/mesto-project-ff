const editButtonOpen = document.querySelector('.profile__edit-button');
const editModal = document.querySelector('.popup_type_edit');
const editButtonClose = editModal.querySelector('.popup__close');
const editForm = document.forms['edit-profile'];
const editInputName = editForm.elements['name'];
const editInputDescription = editForm.elements['description'];
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const editModalSaveButton = editForm.querySelector('.popup__button');
const avatarModal = document.querySelector('.popup_type_avatar');
const profileImage = document.querySelector('.profile__image');
const avatarForm = document.forms['new-avatar'];
const avatarInput = avatarForm.elements['link'];
const avatarCloseButton = avatarModal.querySelector('.popup__close');
const avatarModalSaveButton = avatarForm.querySelector('.popup__button');
const addModal = document.querySelector('.popup_type_new-card');
const addButtonOpen = document.querySelector('.profile__add-button');
const addForm = document.forms['new-place'];
const addInputName = addForm.elements['place-name'];
const addInputUrl = addForm.elements['link'];
const addModalSaveButton = addModal.querySelector('.popup__button');
const addButtonClose = addModal.querySelector('.popup__close');
const imageModal = document.querySelector('.popup_type_image');
const imageButtonClose = imageModal.querySelector('.popup__close');
const imageCard = imageModal.querySelector('.popup__image');
const imageCaption = imageModal.querySelector('.popup__caption');
const placesList = document.querySelector('.places__list');

export { editButtonOpen, editModal, editButtonClose, editForm, editInputName, editInputDescription, profileTitle, profileDescription, editModalSaveButton, avatarModal, profileImage,
  avatarForm, avatarInput, avatarCloseButton, avatarModalSaveButton, addModal, addButtonOpen, addForm, addInputName, addInputUrl, addModalSaveButton, addButtonClose, imageModal,
  imageButtonClose, imageCard, imageCaption, placesList }
