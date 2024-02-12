
let swiper = null;

function initSwiper() {
  swiper = new Swiper('.stages__slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
      560: {
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: 30,
      }
    },

    

    pagination: {
      el: '.swiper-page',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    

  });
}

function destroySwiper() {
  if (swiper) {
    swiper.destroy();
    swiper = null;
  }
}

function checkWindowSize() {
  if (window.innerWidth <= 560) {
    if (!swiper) {
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);