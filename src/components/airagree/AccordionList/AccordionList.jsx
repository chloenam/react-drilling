import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

const AccordionList = ({ data, checkedList, onCheck }) => {
  return (
    <>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          checked={checkedList[index]}
          onChange={(e) => onCheck(index, e.target.checked)}
        >
          {item.content.map((text, i) => (
            <li key={i} className="list-item">
              {text}
            </li>
          ))}
        </AccordionItem>
      ))}
    </>
  );
};

export default AccordionList;
