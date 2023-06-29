const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');

openMenu.addEventListener('click', function () {
    menu.style.display = "inherit";
});
closeMenu.addEventListener('click', function () {
    menu.style.display = "none";
});

