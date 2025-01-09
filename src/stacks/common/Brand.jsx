import React from "react";
import * as SiIcons from "react-icons/si";

const Brand = ({ iconName,alt,color }) => {
  const Icon = SiIcons[iconName]; // Dynamically get the icon
  return (
    <li>
       <Icon alt={alt} size={32}  color={color} />
    </li>
  );
};
export default Brand;
