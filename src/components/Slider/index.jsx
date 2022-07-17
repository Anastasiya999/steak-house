import React from "react";

import Ad from "../Ad";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Ad>
            <h1>
              <span>Rabat 10%</span> na pierwsze zamówienie!
            </h1>
            <p>
              Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
              <b> promocji -10%</b>. Spiesz się, czas trwania promocji do końca
              lutego.
            </p>
          </Ad>
          <img src="/assets/Bitmapv.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Ad>
            <h1>
              <span>Rabat 10%</span> na pierwsze zamówienie!
            </h1>
            <p>
              Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
              <b> promocji -10%</b>. Spiesz się, czas trwania promocji do końca
              lutego.
            </p>
          </Ad>
          <img src="/assets/Bitmapv.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Ad>
            <h1>
              <span>Rabat 10%</span> na pierwsze zamówienie!
            </h1>
            <p>
              Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
              <b> promocji -10%</b>. Spiesz się, czas trwania promocji do końca
              lutego.
            </p>
          </Ad>
          <img src="/assets/Bitmapv.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
