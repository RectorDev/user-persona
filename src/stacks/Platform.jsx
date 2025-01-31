import React from "react";
import { platformDev } from "../constants/index.js";

import { MdOutlineAppShortcut } from "react-icons/md";
import { LuAppWindowMac } from "react-icons/lu";

const Platform = () => {
  return (
    <div className={"text-primary flex flex-1 flex-col bg-white rounded-md p-4"}>
      <h2 className={"fo nt-bold font-palanquin font-bold"}>Platform</h2>
      <ul className={"list-none mt-4 pl-4 flex flex-wrap gap-4 items-center "}>
        {platformDev.mobile && (
          <li>
            <MdOutlineAppShortcut size={35} color={"#23b"} />
          </li>
        )}
        {platformDev.web && (
          <li>
            <LuAppWindowMac size={35} color={"#333"} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Platform;
