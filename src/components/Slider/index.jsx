import React from "react";

import Ad from "../Ad";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
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
        rewind
        effect={"fade"}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slideAdwrapper">
            <Ad>
              <h1>
                <span>Rabat 10%</span> na pierwsze zamówienie!
              </h1>
              <p>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
                <b> promocji -10%</b>. Spiesz się, czas trwania promocji do
                końca lutego.
              </p>
            </Ad>
          </div>

          <div
            role="image"
            style={{
              backgroundImage: `url(${"/assets/dana-devolk-x2cNcfz_xXU-unsplash@2x.png"})`,
              backgroundSize: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slideAdwrapper">
            <Ad>
              <h1>
                <span>Rabat 10%</span> na pierwsze zamówienie!
              </h1>
              <p>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
                <b> promocji -10%</b>. Spiesz się, czas trwania promocji do
                końca lutego.
              </p>
            </Ad>
          </div>
          <div
            role="image"
            style={{
              backgroundImage: `url(${"/assets/Bitmapv.png"})`,
              backgroundSize: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slideAdwrapper">
            <Ad>
              <h1>
                <span>Rabat 10%</span> na pierwsze zamówienie!
              </h1>
              <p>
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
                <b> promocji -10%</b>. Spiesz się, czas trwania promocji do
                końca lutego.
              </p>
            </Ad>
          </div>
          <div
            role="image"
            style={{
              backgroundImage: `url(${"/assets/Bitmapv.png"})`,
              backgroundSize: "cover",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
