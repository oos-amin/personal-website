'use strict'
const menu = document.querySelector('.nav__toggle-icon');
const menuList = document.querySelector('.nav__list');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', function () {
    menu.classList.toggle('nav__toggle-icon--open');
    menuList.classList.toggle('nav__list--open')
    overlay.classList.toggle('overlay--show');
});