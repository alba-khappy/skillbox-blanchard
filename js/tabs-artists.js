document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion-a--artist').forEach(function(tabsNameArtist) {
        tabsNameArtist.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.tab-content-artist').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active-artist');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active-artist');
        });
    });
});