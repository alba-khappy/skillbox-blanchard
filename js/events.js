document.getElementsByClassName('events__button')[0].addEventListener('click', function () {
    
    var allEvents = document.getElementsByClassName('events__wrapper-div')[0];
    allEvents.classList.toggle('events__wrapper-div-open');

    var button = document.getElementsByClassName('events__button')[0];
    button.style.display = "none";

});
