import React from 'react'
import Brand from "./common/Brand.jsx";
import { brands } from "../constants";

const Brands = () => {
  return (
      <div className={"text-primary bg-white rounded-md p-4"}>
        <h2 className={"fo nt-bold font-palanquin font-bold"}>Brands</h2>
        <ul className={"list-none mt-2 pl-4 flex flex-wrap gap-4 items-center"}>
            {brands.map((item, index) => (<Brand key={index} iconName={item.icon} alt={item.name} color={item.color} />))}
        </ul>
      </div>
  )
}

export default Brands