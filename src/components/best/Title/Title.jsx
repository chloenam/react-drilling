import React, { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import useBreakpoint from "../../../hook/useBreakpoint";

const Title = () => {
  const [isOpen, setIsOpen] = useState(false);
  const breakpoint = useBreakpoint();

  return (
    <>
      {breakpoint === "desktop" && (
        <div className="box__best-title">
          <h2 className="text__title">G마켓 베스트</h2>
          <Tooltip
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Title;
