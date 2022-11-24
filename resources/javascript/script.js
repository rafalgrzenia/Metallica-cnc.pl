const hamburger = document.querySelector('.hamburger-menu');
const navigationHeader = document.querySelector('.navigation-header');

const hamburgerOnClick = () => {
    hamburger.classList.toggle('hamburger-active');
    navigationHeader.classList.toggle('navigation-header-active');
}

hamburger.addEventListener('click', hamburgerOnClick);