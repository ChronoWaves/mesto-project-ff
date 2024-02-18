import { putLike, deleteCard, removeLike } from "./api";

function createCard(cardValue, userId, removeCard, likeCard, openCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardContent = cardTemplate.querySelector('.card').cloneNode(true);
    cardContent.querySelector('.card__title').textContent = cardValue.name;
    const cardImage = cardContent.querySelector('.card__image');
    cardImage.src = cardValue.link;
    cardImage.alt = cardValue.name;
    const deleteButton = cardContent.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', (event) => removeCard(event, cardValue));
    if (cardValue.owner._id !== userId) {
        deleteButton.remove();
    }
    const likeButton = cardContent.querySelector('.card__like-button');
    const likeCount = cardContent.querySelector('.card__like-count');
    likeButton.addEventListener('click', (event) => likeCard(event, cardValue, userId));
    if (cardValue.likes.length > 0) {
        likeCount.textContent = cardValue.likes.length;
    } else {
        likeCount.textContent = '0';
    }
    if (liked(cardValue, userId)) {
        likeButton.classList.add('card__like-button_is-active');
    } else {
        likeButton.classList.remove('card__like-button_is-active');
    }
    const imageClick = cardImage;
    imageClick.addEventListener('click', () => {
        openCard(cardValue);
    })
    return cardContent;
}

function removeCard (event, cardValue) {
    const card = event.target.closest('.card');
    deleteCard(cardValue._id)
    .then (() => {
        card.remove();
    })
    .catch((error) => {
      console.log(error);
  })
  }

function liked(cardValue, userId) {
    return cardValue.likes.some(owner => owner._id === userId)
}

function likeCard (event, cardValue, userId) {
    const likeButton = event.target;
    const likeCount = likeButton.closest('.card__like').querySelector('.card__like-count');
    const isLiked = liked(cardValue, userId);
    if (isLiked) {
        removeLike(cardValue._id)
        .then(res => {
            cardValue.likes = res.likes;
            likeButton.classList.remove('card__like-button_is-active');
            likeCount.textContent = res.likes.length;
        })
        .catch((error) => {
          console.log(error);
      })
    } else {
        putLike(cardValue._id)
        .then(res => {
            cardValue.likes = res.likes;
            likeButton.classList.add('card__like-button_is-active');
            likeCount.textContent = res.likes.length;
        })
        .catch(error => {
          console.log(error);
      })
    }
}

export { createCard, removeCard, likeCard };
