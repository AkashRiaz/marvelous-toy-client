import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const OurBrand = () => {
  return (
    <div className="border-t-2 border-b-2 py-10 mb-7">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/5.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/6.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/3.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/5.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurBrand;
