import React from "react";

import Ad from "../Ad";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper";

import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";

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

          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        rewind
        autoHeight={true}
        effect={"fade"}
        modules={[Pagination, Autoplay, EffectFade]}
      >
        <SwiperSlide>
          <div className="swiper-slideAdwrapper">
            <Ad>
              <h1>
                <span>Rabat 10%</span> na pierwsze zamówienie!
              </h1>
              <p role="banner">
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
                <strong> promocji -10%</strong>. Spiesz się, czas trwania
                promocji do końca lutego.
              </p>
            </Ad>
          </div>

          <div
            role="image"
            style={{
              backgroundImage: `-webkit-image-set( url(${"/assets/dana-devolk-x2cNcfz_xXU-unsplash.png"}) 1x, url(${"/assets/dana-devolk-x2cNcfz_xXU-unsplash@2x.png"}) 2x )`,
              backgroundSize: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slideAdwrapper">
            <Ad>
              <h1>
                <span>Rabat 80%</span> na każde 10 zamówienie!
              </h1>
              <p role="banner">
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
                <strong> promocji -80%</strong>. Spiesz się, czas trwania
                promocji do końca lutego.
              </p>
            </Ad>
          </div>
          <div
            role="image"
            style={{
              backgroundImage: `-webkit-image-set( url(${"/assets/Bitmapv.png"}) 1x, url(${"/assets/Bitmapv@2x.png"}) 2x )`,

              backgroundSize: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slideAdwrapper">
            <Ad>
              <h1>
                <span>Rabat 50%</span> na drugie zamówienie!
              </h1>
              <p role="banner">
                Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
                <strong> promocji -50%</strong>. Spiesz się, czas trwania
                promocji do końca lutego.
              </p>
            </Ad>
          </div>
          <div
            role="image"
            style={{
              backgroundImage: `-webkit-image-set( url(${"/assets/Bitmapv.png"}) 1x, url(${"/assets/Bitmapv@2x.png"}) 2x )`,
              backgroundSize: "cover",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
