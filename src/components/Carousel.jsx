import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel() {
  return (
    <section className="mx-auto">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }} // Auto play every 10 sec
      >
        <SwiperSlide>
          <img src="src/assets/crousel/slide-banner-01.jpg" alt="banner-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/crousel/slide-banner-02.jpg" alt="banner-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/crousel/slide-banner-03.jpg" alt="banner-3" />
        </SwiperSlide>
      </Swiper>
       <style jsx>{`
       .swiper-button-next, .swiper-button-prev 
{
    color: #ed1b24;
    background-color: #ecc731;
    padding: 30px;
    border-radius: 100%;
}
        .swiper-button-next, .swiper-button-prev :hover
       `}
       </style>
    </section>
  );
}

export default Carousel;
