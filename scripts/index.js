document.querySelector(".profile__add-button").addEventListener("click", function() {
  document.querySelector(".popup_type_new-card").classList.add("popup_is-opened")
})

document.querySelector("#popup__close_new-card").addEventListener("click", function() {
  document.querySelector(".popup_type_new-card").classList.remove("popup_is-opened")
})

function deleteCard(event) {
  event.target.closest(".places__item").remove()
}

const cardTemplate = document.querySelector("#card-template").content;
const cardContainer = document.querySelector(".places__list");

function createCard(item, deleteCard) {
    const cardContent = cardTemplate.querySelector(".card").cloneNode(true);
    cardContent.querySelector(".card__title").textContent = item.name;
    cardContent.querySelector(".card__image").src = item.link;
    cardContent.querySelector(".card__image").alt = item.name;
    cardContent.querySelector(".card__delete-button").addEventListener("click", deleteCard);
    return cardContent;
}

initialCards.forEach(function(item) {
  const card = createCard(item, deleteCard);
  cardContainer.append(card);
});
