'use strict'
const menu = document.querySelector('.nav__toggle-icon');

menu.addEventListener('click', function () {
    menu.classList.toggle('nav__toggle-icon--open');
});