'use strict'
const menu = document.querySelector('.nav__toggle-icon');
const menuList = document.querySelector('.nav__list');

menu.addEventListener('click', function () {
    menu.classList.toggle('nav__toggle-icon--open');
    menuList.classList.toggle('nav__list--open')
});