import React, { useState } from "react";

const AccordionItem = ({ title, children, index, checked, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="box__accordion">
        <div className="box__accordion-button">
          <div className="box__form--checkbox">
            <input
              type="checkbox"
              id={`agree${index}`}
              className="form__checkbox sprite__air-res--before"
              checked={checked}
              onChange={onChange}
            />
            <label htmlFor={`agree${index}`} className="text__label">
              {title}
            </label>
          </div>
          <button
            type="button"
            className="js-button__expend sprite__air-res--after"
            aria-expanded={isOpen}
            onClick={handleClick}
          >
            자세히
          </button>
        </div>
        <div
          className="box__accordion-content"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <ul className="list__content">{children}</ul>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
