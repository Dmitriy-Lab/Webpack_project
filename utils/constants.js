export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const config = {
    inputSelector: '.popup__form_input',
    errorElementSelector: '.popup__input-error_',
    buttonSubmitSelector: '.popup__form_submit-button',
    spanErrorClass: 'popup__input-error_active',
    inputErrorClass: 'popup__form_input_type-error'
};

export const templateSelector = '.card__template';
export const btnRename = document.querySelector('.button__rename');
export const btnAddCard = document.querySelector('.button__add');
export const nameOnSite = document.querySelector('.popup__form_name');
export const aboutOnSite = document.querySelector('.popup__form_profession');
export const popupAddCardClass = document.querySelector('.popup__form-addCard');
export const popupUserInfoClass = document.querySelector('.popup__form-rename');
