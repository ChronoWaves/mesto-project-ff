const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button');
const editModal = document.querySelector('.popup_type_edit');
const buttonCloseEditProfileForm = editModal.querySelector('.popup__close');
const formEditProfile = document.forms['edit-profile'];
const editInputName = formEditProfile.elements['name'];
const editInputDescription = formEditProfile.elements['description'];
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const editModalSaveButton = formEditProfile.querySelector('.popup__button');
const avatarModal = document.querySelector('.popup_type_avatar');
const profileImage = document.querySelector('.profile__image');
const avatarForm = document.forms['new-avatar'];
const avatarInput = avatarForm.elements['link'];
const buttonCloseUpdateAvatarForm = avatarModal.querySelector('.popup__close');
const avatarModalSaveButton = avatarForm.querySelector('.popup__button');
const addModal = document.querySelector('.popup_type_new-card');
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');
const formAddCard = document.forms['new-place'];
const addInputName = formAddCard.elements['place-name'];
const addInputUrl = formAddCard.elements['link'];
const addModalSaveButton = addModal.querySelector('.popup__button');
const buttonCloseAddCardForm = addModal.querySelector('.popup__close');
const imageModal = document.querySelector('.popup_type_image');
const imageButtonClose = imageModal.querySelector('.popup__close');
const imageCard = imageModal.querySelector('.popup__image');
const imageCaption = imageModal.querySelector('.popup__caption');
const placesList = document.querySelector('.places__list');

export { buttonOpenEditProfileForm, editModal, buttonCloseEditProfileForm, formEditProfile, editInputName, editInputDescription, profileTitle, profileDescription, editModalSaveButton, avatarModal, profileImage,
  avatarForm, avatarInput, buttonCloseUpdateAvatarForm, avatarModalSaveButton, addModal, buttonOpenAddCardForm, formAddCard, addInputName, addInputUrl, addModalSaveButton, buttonCloseAddCardForm, imageModal,
  imageButtonClose, imageCard, imageCaption, placesList }
