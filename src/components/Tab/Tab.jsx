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
      <NavLink
        to="/3week"
        className={({ isActive }) =>
          isActive ? "link__tab is-active" : "link__tab"
        }
      >
        3week
      </NavLink>
      <NavLink
        to="/4week"
        className={({ isActive }) =>
          isActive ? "link__tab is-active" : "link__tab"
        }
      >
        4week
      </NavLink>
      <NavLink
        to="/5week"
        className={({ isActive }) =>
          isActive ? "link__tab is-active" : "link__tab"
        }
      >
        5week
      </NavLink>
      <NavLink
        to="/6week"
        className={({ isActive }) =>
          isActive ? "link__tab is-active" : "link__tab"
        }
      >
        6week
      </NavLink>
      <NavLink
        to="/7week"
        className={({ isActive }) =>
          isActive ? "link__tab is-active" : "link__tab"
        }
      >
        7week
      </NavLink>
    </div>
  );
};

export default Tab;
