import React from "react";
import { bio } from "../constants/index.js";

const Bio = () => {
  return (
    <div className={'text-primary bg-white rounded-md p-4'}>
      <h2 className={"font-bold font-palanquin"}>Bio</h2>
      <p className={'leading-6 font-montserrat text-sm mt-2'}>{bio}</p>
    </div>
  );
};

export default Bio;
