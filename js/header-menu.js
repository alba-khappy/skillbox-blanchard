document.getElementsByClassName('header__li--gray')[0].addEventListener('click', function () {

    var showItems = document.getElementsByClassName('header__item-close')[0];
    showItems.classList.toggle('header__item-open');
})