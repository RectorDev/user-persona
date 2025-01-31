import React from 'react'
import {quote} from "../constants/index.js";

const Quote = () => {
  return (
    <div className={'text-primary bg-white rounded-md p-4'}>
      <h2 className={"font-bold font-palanquin"}>Quote</h2>
      <p className={'leading-6 font-montserrat text-sm mt-2'}>{quote}</p>
    </div>
  )
}

export default Quote