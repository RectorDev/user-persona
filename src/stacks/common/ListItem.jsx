import React from "react";

const ListItem = ({ text = "text" }) => {
  return (
    <li
      className={
        "marker:text-secondary leading-6 font-montserrat text-sm mt-2"
      }
    >
      {text}
    </li>
  );
};
export default ListItem;
