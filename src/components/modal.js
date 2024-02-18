function openModal(element) {
    element.classList.add('popup_is-opened');
    element.addEventListener('click', closeModalOverlay);
    document.addEventListener('keydown', closeModalEsc);
}

function closeModal(element) {
    element.classList.remove('popup_is-opened');
    element.addEventListener('click', closeModalOverlay);
    document.addEventListener('keydown', closeModalEsc);
}

function closeModalEsc(event) {
    if (event.key === 'Escape') {
        closeModal(document.querySelector('.popup_is-opened'))
    };
}

function closeModalOverlay(event) {
    if (event.target === event.currentTarget) {
        closeModal(event.currentTarget);
    };
}

export { openModal, closeModal };
