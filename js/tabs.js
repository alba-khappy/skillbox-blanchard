document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog--wrapper-img').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                console.log(9999);
                tabContent.classList.remove('tab-content-active');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
        });
    });
});