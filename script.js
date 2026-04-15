// ============================
// Mobile Menu Toggle
// ============================

// Select elements based on new BEM structure
const menuToggle = document.querySelector('.header__toggle');
const navigation = document.querySelector('.nav__list');

// Toggle mobile navigation
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('nav__list--open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navigation.classList.remove('nav__list--open');
    });
});


// ============================
// Sticky Header on Scroll
// ============================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});



