import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CategoryItem from "../CategoryItem/CategoryItem";
import dummyData from "../dummyData/dummyData";
import useBreakpoint from "../../../hook/useBreakpoint";

const swiperConfig = () => ({
  navigation: {
    prevEl: ".box__category-wrap .swiper-button-prev",
    nextEl: ".box__category-wrap .swiper-button-next",
  },
  slidesPerView: "auto",
  watchSlidesProgress: true,
});

const CategoryList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categoryData = dummyData.categoryData;
  const breakpoint = useBreakpoint();

  return (
    <div className="box__category-wrap">
      {categoryData.length > 14 && breakpoint === "desktop" ? (
        <>
          <Swiper modules={[Navigation]} {...swiperConfig()}>
            {categoryData.map((category, index) => (
              <SwiperSlide>
                <CategoryItem
                  key={index}
                  category={category}
                  ariaCurrent={"page"}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className="swiper-button-prev"
            aria-label="이전 슬라이드"
          ></button>
          <button
            type="button"
            className="swiper-button-next"
            aria-label="다음 슬라이드"
          ></button>
        </>
      ) : (
        <>
          {categoryData.map((category, index) => (
            <CategoryItem
              key={index}
              ariaCurrent={"page"}
              category={category}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CategoryList;
