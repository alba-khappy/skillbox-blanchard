document.getElementsByClassName('events__button')[0].addEventListener('click', function () {
    
    var allEvents = document.getElementsByClassName('events__wrapper-ul')[0];
    allEvents.classList.toggle('events__wrapper-ul-open');

    var button = document.getElementsByClassName('events__button')[0];
    button.style.display = "none";

});
