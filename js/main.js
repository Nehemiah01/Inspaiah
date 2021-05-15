const hamburger = document.querySelector('.hamburger-menu')
const menuBar = document.querySelector('#header-nav .navbar-links')

hamburger.addEventListener('click', toggler = (e) => {
    menuBar.classList.toggle('display')
    hamburger.classList.toggle('cancel')
    document.querySelector('.top-body').classList.toggle('blur')
})