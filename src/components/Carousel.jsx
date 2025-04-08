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
      alt: "slider-1",
      title: "Krishna Ganga Rehabilitation Center",
      goal: "Healing Begins Here. Freedom Awaits.",
      subtitle: "Empowering lives through care, compassion, and recovery."
    },
    {
      src: "src/assets/carousel/slider-2.jpg",
      alt: "slider-2",
      title: "Krishna Ganga Rehabilitation Center",
      goal: "Healing Begins Here. Freedom Awaits.",
      subtitle: "Empowering lives through care, compassion, and recovery."
    },
    {
      src: "src/assets/carousel/slider-3.jpg",
      alt: "slider-3",
      title: "Krishna Ganga Rehabilitation Center",
      goal: "Healing Begins Here. Freedom Awaits.",
      subtitle: "Empowering lives through care, compassion, and recovery."
    },
    {
      src: "src/assets/carousel/slider-4.jpg",
      alt: "slider-4",
      title: "Krishna Ganga Rehabilitation Center",
      goal: "Healing Begins Here. Freedom Awaits.",
      subtitle: "Empowering lives through care, compassion, and recovery."
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
        {slider.map((a) => (
          <SwiperSlide className='relative'>
            <div className='bg-[#00000069] h-[600px] w-full z-10 absolute top-0'></div>
            <img className='h-[600px] w-full object-cover' src={a.src} alt={a.alt} />
            <div className='absolute top-[42%] left-[10%] z-20'>
              <h2 className='text-4xl font-extrabold text-white '>{a.title}</h2>
              <h4 className='text-2xl font-medium text-[#fff] mt-2'>{a.goal}</h4>
              <h6 className='text-lg text-[#ccc]'>{a.subtitle}</h6>
            </div>
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

    @media (max-width: 640px) {
      .swiper-button-next,
      .swiper-button-prev {
      display: none !important;
      }
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
