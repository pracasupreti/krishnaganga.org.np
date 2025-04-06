import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel() {
  let slider = [
    {
      src: "src/assets/carousel/slider-1.jpg",
      alt: "slider-1"
    },
    {
      src: "src/assets/carousel/slider-2.jpg",
      alt: "slider-2"
    },
    {
      src: "src/assets/carousel/slider-3.jpg",
      alt: "slider-3"
    },
    {
      src: "src/assets/carousel/slider-4.jpg",
      alt: "slider-4"
    }
  ];
  
  return (
    <section className="mx-auto lg:w-full max-w-[1400px]">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }} 
      >
        {slider.map((a)=>(
          <SwiperSlide>
          <img className='h-[600px] w-full' src={a.src} alt={a.alt} />
        </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>
  {`
    .swiper-button-next, .swiper-button-prev {
      color: #ed1b24;
      background-color: #ecc731;
      padding: 40px;
      border-radius: 100%;
      transition: all 500ms ease;
      transform: scale(0.8);
    }
    .swiper-button-next:hover, .swiper-button-prev:hover {
      color: #465e88;
    }

    /* Ensure pagination bullets are yellow */
    .swiper-pagination-bullet {
      background-color: yellow !important;
    }
    
    /* Ensure active pagination bullet is yellow */
    .swiper-pagination-bullet-active {
      background-color: yellow !important;
    }
  `}
</style>



    </section>
  );
}

export default Carousel;
