// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='object-cover h-96' src="/img/hero_img_left.JPG" alt="Sashank" /></SwiperSlide>
      <SwiperSlide><img className='object-cover h-96' src="/img/hero_img_center.JPG" alt="Sashank" /></SwiperSlide>
      <SwiperSlide><img className='object-cover h-96' src="/img/hero_img_right.JPG" alt="Sashank" /></SwiperSlide>
      ...
    </Swiper>
  );
};