const swiperThird = new Swiper('.swiper-3', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 50,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-3',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-3',
      prevEl: '.swiper-button-prev-3',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });