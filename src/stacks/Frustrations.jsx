import React from 'react'
import {coreNeeds, frustrations} from "../constants/index.js";
import ListItem from "./common/ListItem.jsx";

const Frustrations = () => {
  return (
      <div className={"text-primary bg-white rounded-md p-4"}>
        <h2 className={"fo nt-bold font-palanquin font-bold"}>Frustrations</h2>
        <ul className={"list-disc pl-4"}>
          {frustrations.map((need, index) => (<ListItem key={index} text={need}/>))}
        </ul>
      </div>
  )
}

export default Frustrations