document.querySelector(".profile__add-button").onclick = function() {
  document.querySelector(".popup_type_new-card").classList.add("popup_is-opened")
}

document.querySelector(".popup__close").onclick = function() {
  document.querySelector(".popup_type_new-card").classList.remove("popup_is-opened")
}

document.querySelector(".places__list").onclick = function(event) {
  const cardDelete = event.target.closest(".places__item")
  cardDelete.remove()
}

const cardsTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".places__list");

const cardsData = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function renderCards({name, link}) {
  const cardsContent = cardsTemplate.querySelector(".places__item").cloneNode(true);
  cardsContent.querySelector(".card__title").textContent = name;
  cardsContent.querySelector(".card__image").src = link;
  cardsContainer.prepend(cardsContent);
}

function render() {
  cardsData.forEach(renderCards);
}

render();
