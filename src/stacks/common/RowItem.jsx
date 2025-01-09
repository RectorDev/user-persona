import React from "react";

const RowItem = ({ title = "title", value ="value" }) => {

  return (
    <li className={"flex items-center text-left"}>
      <span
        className={
          "text-slate-gray text-sm uppercase leading-8 text-left flex-1"
        }
      >
        {title.join().replace(/_/g, " ")}
      </span>
      <span className={"capitalize font-montserrat text-md text-left flex-1"}>
   {value.join().replace(/_/g, " ")}
      </span>


    </li>
  );
};
export default RowItem;
