import React from "react";
import { personality} from "../constants/index.js";

const Personality = () => {
  return (
    <div className={"text-primary bg-white rounded-md p-4"}>
      <h2 className={"font-bold font-palanquin"}>Personality</h2>
      <p className={"leading-6 font-montserrat text-sm mt-2"}>{personality}</p>
    </div>
  );
};

export default Personality;