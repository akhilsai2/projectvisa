import { useState } from "react";
import { useSelector } from "react-redux";
import "./accordian.css";

const Accordian = (props) => {
  const { items, active, onSelect } = props;
  const { Exam, Service } = useSelector((state) => state.globalstate);

  const selectItem = (text) => {
    onSelect(text);
  };

  return (
    <ul style={{ width: "70%" }}>
      {items.map((x, idx) => (
        <li
          className={
            x.text === active
              ? "item_accordian itemSelected flex flex-row justify-content-between align-items-center"
              : "item_accordian  flex flex-row justify-content-between align-items-center"
          }
          key={idx}
          onClick={() => selectItem(x.text)}
        >
          <span>{x.text}</span>
          <i className="fa fa-arrow-right"></i>
        </li>
      ))}
    </ul>
  );
};

export default Accordian;
