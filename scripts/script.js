'use strict'

// Select DOM elements
const menu = document.querySelector('.nav__toggle-icon');
const menuList = document.querySelector('.nav__list');
const overlay = document.querySelector('.overlay');
const body = document.body;
const resumeItems = document.querySelectorAll('.resume-left__item');

// Add click event to menu icon
menu.addEventListener('click', function () {
    menu.classList.toggle('nav__toggle-icon--open');
    menuList.classList.toggle('nav__list--open');
    overlay.classList.toggle('overlay--show');

    // Enable or disable body scroll depending on menu state
    if (menu.classList.contains('nav__toggle-icon--open')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
});

// Add click event to overlay
overlay.addEventListener('click', function () {

    menu.classList.remove('nav__toggle-icon--open');
    menuList.classList.remove('nav__list--open');
    overlay.classList.remove('overlay--show');

    // Restore body scroll state
    if (menu.classList.contains('nav__toggle-icon--open')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
});

// Add click event to each resume item
for (let i = 0; i < resumeItems.length; i++) {
    resumeItems[i].addEventListener('click', function () {
        document.querySelector('.resume-left__item--active').classList.remove('resume-left__item--active');
        document.querySelector('.resmue-right__content--show').classList.remove('resmue-right__content--show');

        resumeItems[i].classList.add('resume-left__item--active');
        let contentId = resumeItems[i].getAttribute('content-id');
        document.querySelector(contentId).classList.add('resmue-right__content--show')
    });
}
