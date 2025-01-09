import React from 'react'
import { FaMoneyBillWave } from "react-icons/fa6";
import { SiBitcoincash } from "react-icons/si";
import {payMethod} from "../constants";
const Payments = () => {

  return (
      <div className={"text-primary bg-white rounded-md p-4"}>
        <h2 className={"fo nt-bold font-palanquin font-bold"}>Payment medium</h2>
        <ul className={"list-none mt-4 pl-4 flex flex-wrap gap-4 items-center "}>
            {payMethod.cash && <li> <FaMoneyBillWave size={35 } color={"green"}/></li>}
            {payMethod.cash && <li> <SiBitcoincash size={35 } color={"#EF8E19"}/></li>}
        </ul>
      </div>
  )
}

export default Payments