import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Crousel() {
  return (
    <section className="mx-auto">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }} // Auto play every 3 sec
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
    </section>
  );
}

export default Crousel;
