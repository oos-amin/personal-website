'use strict'

// Select DOM elements
const menu = document.querySelector('.nav__toggle-icon');
const menuList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');
const changeThemeBtn = document.querySelector('.nav__btn');
const themeSVG = document.querySelectorAll('.nav__btn-svg');
const overlay = document.querySelector('.overlay');
const body = document.body;
const resumeItems = document.querySelectorAll('.resume-left__item');
const portfolioItems = document.querySelectorAll('.portfolio-list__item');

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

//Add click event to menu items
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function () {
        document.querySelector('.nav__item--open').classList.remove('nav__item--open');
        this.classList.add('nav__item--open');
    })
};

// Add click event to change theme button
changeThemeBtn.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark-theme');
    for (let i = 0; i < themeSVG.length; i++) {
        if (document.documentElement.classList.contains('dark-theme')) {
            document.querySelector('.nav__btn-svg').classList.add('nav__btn-svg--disable');
            themeSVG[i].classList.remove('nav__btn-svg--disable')
        } else {
            document.querySelector('.nav__btn-svg').classList.remove('nav__btn-svg--disable');
            themeSVG[i].classList.add('nav__btn-svg--disable')
        }
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

// Add click event to Portfolio items
for (let i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener('click', function () {
        document.querySelector('.portfolio-list__item--active').classList.remove('portfolio-list__item--active');
        document.querySelector('.portfolio-content--active').classList.remove('portfolio-content--active');

        portfolioItems[i].classList.add('portfolio-list__item--active');
        let portfolioId = portfolioItems[i].getAttribute('portfolio-id');
        document.querySelector(portfolioId).classList.add('portfolio-content--active');
    })
};