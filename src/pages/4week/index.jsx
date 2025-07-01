import React from "react";
import useChangeCss from "../../hook/useChangeCSS";
import "./index.css";
import BannerSwiper from "../../components/brandshop/BannerSwiper/BannerSwiper";

const BrandShop = () => {
  useChangeCss([
    "//script.gmarket.co.kr/starro/mobile/css/brandshop/brandshop.css",
  ]);
  return (
    <div className="box__main-banner box__main-banner--card">
      <BannerSwiper />
    </div>
  );
};

export default BrandShop;
