const swiperSecond = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerColumn: 1,
    breakpoints: {
      320: {
        slidesPerView:2,
        spaceBetween:30
      },
      768: {
        slidesPerView:2,
        spaceBetween:35
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
  
    pagination: {
      el: '.swiper-pagination-2',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });