



new Swiper ('.players__slider', {
    
    slidesPerView: 3,
    //slidesPerGroup: 3,
    loop: true,
    
    autoplay: {
        delay: 4000,
    },
  
   
    navigation: {
        
        nextEl: '.swiper-button-next-two',
        prevEl: '.swiper-button-prev-two',
    
    },
  
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    spaceBetween: 20,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    breakpoints: {
        280: {
            slidesPerView: 1, 
            
        },

        376: {
            slidesPerView: 2, 
        },

        /*560: {
            slidesPerView: 2,  
        },*/

        640: {
            slidesPerView: 2,
        },

        1025: {
            slidesPerView: 3,
            //slidesPerGroup: 3,
          
        }
      },

   
});