const swiper = new Swiper('.swiper', {
    spaceBetween: 100,
    slidesPerView: 1,
    speed:1000,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 3000,
        },
  });