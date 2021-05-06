const hamburger = document.querySelector('.hamburger-menu')
const menuBar = document.querySelector('#header-nav .navbar-links')

hamburger.addEventListener('click', toggler = (e) => {
    menuBar.classList.toggle('nav-active')
    hamburger.classList.toggle('cancel')
})