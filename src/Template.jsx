import { useRef } from "react";
import Profile from "./stacks/Profile";
import Bio from "./stacks/Bio.jsx";
import Quote from "./stacks/Quote.jsx";
import Personality from "./stacks/Personality.jsx";
import CoreNeeds from "./stacks/CoreNeeds.jsx";
import Frustrations from "./stacks/Frustrations.jsx";
import Brands from "./stacks/Brands.jsx";
import Payments from "./stacks/Payments.jsx";
import Platform from "./stacks/Platform.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

import html2canvas from "html2canvas";

const Template = () => {
  const divRef = useRef(null);

  const handleDownload = () => {
    if (divRef.current) {
      // Capture the div content as an image
      html2canvas(divRef.current).then((canvas) => {
        // Convert the canvas to a data URL
        const image = canvas.toDataURL("image/png");

        // Create a temporary link element
        const link = document.createElement("a");
        link.href = image;
        link.download = "div-content.png"; // File name
        link.click(); // Trigger the download
      });
    }
  };

  return (
    <section ref={divRef} className=" my-0 mx-auto max-w-5xl  bg-primary p-4 ">
      <div className={"flex flex-1 gap-4"}>
        <div className={"flex flex-col gap-4 flex-shrink-0 max-w-[26%]"}>
          <Profile />
          <Quote />
          <Personality />
        </div>
        <div className={"flex flex-col gap-4 flex-1"}>
          <Bio />
          <CoreNeeds />
          <Frustrations />
          <Brands />
          <div className={"flex-row flex gap-4 w-full"}>
            <Payments />
            <Platform />
          </div>
        </div>
      </div>
      <div className={"absolute left-0 top-0"}>
        <ThemeToggle />
      </div>{" "}
      <button className={'absolute bg-slate-800 text-white px-4 text-lg border-2 rounded-lg border-black py-2 right-6 bottom-6'} onClick={handleDownload}>
        download
      </button>
    </section>
  );
};

export default Template;