(()=>{"use strict";var e=document.querySelector("#card-template").content,t=document.querySelector(".places__list");function r(t,r,n,o){var c=e.querySelector(".card").cloneNode(!0);return c.querySelector(".card__title").textContent=t.name,c.querySelector(".card__image").src=t.link,c.querySelector(".card__image").alt=t.name,c.querySelector(".card__delete-button").addEventListener("click",r),c.querySelector(".card__like-button").addEventListener("click",n),c.querySelector(".card__image").addEventListener("click",o),c}function n(e){e.target.closest(".places__item").remove()}function o(e){e.target.classList.toggle("card__like-button_is-active")}function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)}function u(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}var i=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),p=document.querySelector(".popup_type_new-card"),l=document.querySelector(".popup_type_edit"),d=document.querySelector(".popup__input_type_name"),_=document.querySelector(".popup__input_type_description"),m=document.querySelector(".profile__title"),y=document.querySelector(".profile__description"),v=document.forms["edit-profile"],f=document.forms["new-place"],S=document.querySelector(".popup__input_type_card-name"),q=document.querySelector(".popup__input_type_url"),k=document.querySelector(".popup_type_image"),g=document.querySelectorAll(".popup");var L,E=function(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(r.inactiveButtonClass),t.disabled=!1):(t.classList.add(r.inactiveButtonClass),t.disabled=!0)};function b(e){var t=e.target,r=document.querySelector(".popup__image"),n=document.querySelector(".popup__caption");r.src=t.src,r.alt=t.alt,n.textContent=t.alt,c(k)}v.addEventListener("submit",(function(e){e.preventDefault(),m.textContent=d.value,y.textContent=_.value,a(l)})),i.addEventListener("click",(function(){d.value=m.textContent,_.value=y.textContent,c(l)})),s.addEventListener("click",(function(){c(p)})),g.forEach((function(e){e.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close"))&&a(e)}))})),f.addEventListener("submit",(function(e){e.preventDefault();var c=S.value,u=q.value,i={};i.name=c,i.link=u,t.prepend(r(i,n,o,b)),f.reset(),a(p)})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var c=r(e,n,o,b);t.append(c)})),L={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(L.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){})),function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);E(r,n,t),r.forEach((function(o){o.addEventListener("input",(function(){(function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""}(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.classList.add(n.errorClass),o.textContent=r}(e,t,t.validationMessage,r)})(e,o,t),E(r,n,t)}))}))}(e,L)}))})();