import React from "react";
import {coreNeeds} from "../constants/index.js";
import ListItem from "./common/ListItem.jsx";

const CoreNeeds = () => {
  return (
    <div className={"text-primary bg-white rounded-md p-4"}>
      <h2 className={"font-bold font-palanquin"}>Core needs</h2>
      <ul className={" list-disc pl-4"}>
          {coreNeeds.map((need,index) => (<ListItem key={index} text={need} />))}
      </ul>
    </div>
  );
};

export default CoreNeeds;
