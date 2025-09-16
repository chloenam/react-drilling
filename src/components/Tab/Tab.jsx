import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Tab.css";
const weeks = [
  "1week",
  "2week",
  "3week",
  "4week",
  "5week",
  "6week",
  "7week",
  "8week",
];
const Tab = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY >= 149);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`box__tab ${isSticky ? "is-sticky" : ""}`}>
      {weeks.map((week, index) => {
        const to = week === "1week" ? "/" : `/${week}`;
        return (
          <NavLink
            key={index}
            to={to}
            className={({ isActive }) =>
              isActive ? "link__tab is-active" : "link__tab"
            }
          >
            {week}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Tab;
