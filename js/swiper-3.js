const swiperSecond = new Swiper('.swiper-container-3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });