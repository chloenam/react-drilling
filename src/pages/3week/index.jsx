import React from "react";
import useChangeCss from "../../hook/useChangeCSS";
import Agree from "../../components/airagree/Agree/Agree";
import "./index.css";

const AirAgree = () => {
  useChangeCss([
    "//script.gmarket.co.kr/pc/css/application/kr/vertical/air/res/overseas/app.css",
  ]);
  return (
    <>
      <div className="box__airagree-wrap">
        <div className="box__scroll-fix"></div>
        <Agree />
      </div>
    </>
  );
};

export default AirAgree;
