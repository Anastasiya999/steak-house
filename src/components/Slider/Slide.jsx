import React from "react";

import Ad from "../Ad";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./styles.scss";

export default function Slide() {
  return (
    <SwiperSlide>
      <div className="swiper-slide-addwrapper">
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
      </div>

      <div
        style={{
          backgroundImage: `url(${"/assets/Bitmapv.png"})`,
          backgroundSize: "cover",
          width: "50%",
        }}
      />
    </SwiperSlide>
  );
}
