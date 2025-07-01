import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import dummyData from "../dummyData/dummyData";

const items = dummyData.mainImages;

const BannerSwiper = () => {
  const swiperElRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperConfig = {
    modules: [Autoplay, Navigation, Pagination, EffectCoverflow],
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3500,
    },
    effect: "coverflow",
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".box__main-banner .box__swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      prevEl: ".box__main-banner .button__swiper-prev",
      nextEl: ".box__main-banner .button__swiper-next",
    },
    onInit: (swiper) => {
      setActiveIndex(swiper.realIndex);
    },
    onSlideChange: (swiper) => {
      setActiveIndex(swiper.realIndex);
    },
    onSlideChangeTransitionEnd: (swiper) => {
      setActiveIndex(swiper.realIndex);
    },
  };

  const autoplayControl = () => {
    const swiper = swiperElRef.current?.swiper;
    if (!swiper) return;

    if (isPlay) {
      swiper.autoplay.start();
      setIsPlay(false);
    } else {
      swiper.autoplay.stop();
      setIsPlay(true);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`button__play-control sprite ${
          isPlay ? "button__play-control--pause" : ""
        }`}
        onClick={() => autoplayControl()}
      >
        <span className="for-a11y">{isPlay ? "재생" : "일시정지"}</span>
      </button>
      <Swiper ref={swiperElRef} {...swiperConfig}>
        {items.map((item, index) => (
          <SwiperSlide
            key={item.link.linkItem.itemNo}
            className={`box__swiper-slide ${
              activeIndex === index ? "box__swiper-slide--active" : ""
            }`}
          >
            <a className="box__thumbnail" href="#">
              <img
                src={item.imageUrl}
                alt=""
                loading="lazy"
                className="image"
              />

              <div
                className="box__banner-text"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <p className="text__title">{item.title}</p>
                <p className="text">{item.subTitle}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="box__swiper-pagination"></div>
      <button
        type="button"
        className="button__swiper-prev"
        aria-label="이전 배너로 가기"
      />
      <button
        type="button"
        className="button__swiper-next"
        aria-label="다음 배너로 가기"
      />
    </>
  );
};

export default BannerSwiper;
