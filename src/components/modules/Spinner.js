import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

export default function Spinner() {
  return (
    <div className="flex-center m-8">
      <BeatLoader color="#5faab1" size={5} speedMultiplier={1}/>
    </div>
  )
}
