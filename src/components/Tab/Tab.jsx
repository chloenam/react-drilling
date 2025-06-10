import React from "react";
import { NavLink } from "react-router-dom";
import "./Tab.css";

const Tab = () => {
  return (
    <div className="box__tab">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "link__tab is-active" : "link__tab"
        }
      >
        1week
      </NavLink>
      <NavLink
        to="/2week"
        className={({ isActive }) =>
          isActive ? "link__tab is-active" : "link__tab"
        }
      >
        2week
      </NavLink>
    </div>
  );
};

export default Tab;
