const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  slidesPerView: 3,
  slidesPerColumn: 1,
  spaceBetween: 30,
  slidesPerGroup: 3,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },

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

  