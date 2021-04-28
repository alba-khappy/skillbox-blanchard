const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 30,
  slidesPerGroup: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-1',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

  