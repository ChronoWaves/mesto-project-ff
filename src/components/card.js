const cardTemplate = document.querySelector("#card-template").content;
const cardContainer = document.querySelector(".places__list");

function createCard(item, deleteCard) {
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);
  cardContent.querySelector(".card__title").textContent = item.name;
  cardContent.querySelector(".card__image").src = item.link;
  cardContent.querySelector(".card__image").alt = item.name;
  cardContent.querySelector(".card__delete-button").addEventListener("click", deleteCard);
  cardContent.querySelector(".card__like-button").addEventListener("click", likeCard);
  return cardContent;
}

function deleteCard(event) {
  event.target.closest(".places__item").remove()
}

function likeCard(event) {
  event.target.classList.toggle("card__like-button_is-active");
}

export { cardTemplate, cardContainer, createCard, deleteCard, likeCard}
