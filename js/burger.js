document.getElementsByClassName('btn-reset')[0].addEventListener('click', function () {
    var menu = document.getElementsByClassName('header--wrapper-nav-a')[0];
    menu.classList.add('open');
});

document.getElementsByClassName('header__li--close-menu')[0].addEventListener('click', function() {
    var menu = document.getElementsByClassName('header--wrapper-nav-a')[0];
    menu.classList.remove('open');
})