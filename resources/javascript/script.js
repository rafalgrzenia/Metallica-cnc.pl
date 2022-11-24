const hamburger = document.querySelector('.hamburger-menu');

const hamburgerOnClick = () => {
    hamburger.classList.toggle('hamburger-active');
}

hamburger.addEventListener('click', hamburgerOnClick);