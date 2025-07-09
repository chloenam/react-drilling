import React, { useState, useRef } from "react";
import Buttons from "../../components/search/Buttons/Buttons";
import SearchLayer from "../../components/search/SearchLayer/SearchLayer";
import "./index.css";

const Accessibility = () => {
  const [showLayer, setShowLayer] = useState(false);
  const lastClickedButtonRef = useRef(null);
  const openLayer = (e) => {
    lastClickedButtonRef.current = e.currentTarget;
    setShowLayer(true);
  };

  const closeLayer = () => {
    setShowLayer(false);
    lastClickedButtonRef.current?.focus();
  };

  return (
    <>
      <div className="box__accessibility-wrap">
        <Buttons onClick={openLayer} />
      </div>
      {/* Layer */}
      {showLayer && <SearchLayer onClose={closeLayer} />}
    </>
  );
};

export default Accessibility;
