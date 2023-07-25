import React, { useState } from "react";
import addIcon from "../../public/add.png";

function SideBar(props) {
  const color = [
    "#fe9b72",
    "#fec971",
    "#00d4fe",
    "#b693fd",
    "#e4ee91",
    "#b9ff5e",
  ];

  const [listOpen, setListOpen] = useState(false);
  return (
    <>
      <div className="sidebar">
        <p className="sidebar-heading">
          Add new <br /> note here
        </p>
        <img src={addIcon} alt="add" onClick={() => setListOpen(!listOpen)} />
        <ul
          // toggle functionality
          className={`sidebar-color-list ${
            listOpen ? "sidebar-color-list-active" : ""
          }`}
        >
          {/* mapping different colors in color array */}
          {color.map((item, index) => (
            <li
              key={index}
              className="sidebar-color-list-item"
              style={{ backgroundColor: item }}
              onClick={() => props.addNote(item)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBar;
